import OpenAI from 'openai';
import { supabase } from '../supabase';
import { Database } from '@/types/database';

export interface AgentConfig {
  id: string;
  name: string;
  type: string;
  description: string;
  systemPrompt: string;
  model: string;
}

export class BaseAgent {
  protected openai: OpenAI;
  protected config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async processMessage(content: string, userId: string) {
    try {
      // Store user message
      const { data: userMessage, error: userMessageError } = await supabase
        .from('messages')
        .insert({
          content,
          role: 'user',
          agent_id: this.config.id,
          user_id: userId,
        })
        .select()
        .single();

      if (userMessageError) throw userMessageError;

      // Get conversation history
      const { data: history, error: historyError } = await supabase
        .from('messages')
        .select('content, role')
        .eq('agent_id', this.config.id)
        .eq('user_id', userId)
        .order('created_at', { ascending: true })
        .limit(10);

      if (historyError) throw historyError;

      // Process with OpenAI
      const completion = await this.openai.chat.completions.create({
        messages: [
          { role: 'system', content: this.config.systemPrompt },
          ...history.map(msg => ({
            role: msg.role as 'user' | 'assistant',
            content: msg.content
          }))
        ],
        model: this.config.model,
      });

      const responseContent = completion.choices[0]?.message?.content || 'I apologize, but I was unable to process your request.';

      // Store AI response
      const { data: aiMessage, error: aiMessageError } = await supabase
        .from('messages')
        .insert({
          content: responseContent,
          role: 'assistant',
          agent_id: this.config.id,
          user_id: userId,
        })
        .select()
        .single();

      if (aiMessageError) throw aiMessageError;

      return {
        message: aiMessage,
        error: null
      };

    } catch (error) {
      console.error('Error processing message:', error);
      return {
        message: null,
        error: 'Failed to process message'
      };
    }
  }

  async getHistory(userId: string, limit = 50) {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('agent_id', this.config.id)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  }
} 