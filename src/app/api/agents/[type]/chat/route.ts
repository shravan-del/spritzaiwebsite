import { NextRequest } from 'next/server';
import { AcademicAgent } from '@/lib/agents/academicAgent';

const agents = {
  academic: new AcademicAgent(),
  // Add other agents here as they are implemented
};

// Configure route segment
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Define the exact Next.js App Router types
type Context = {
  params: { type: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function POST(
  request: Request,
  context: Context
) {
  try {
    const { type } = context.params;
    const { message, userId } = await request.json();

    if (!message || !userId) {
      return new Response(
        JSON.stringify({ error: 'Message and userId are required' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return new Response(
        JSON.stringify({ error: 'Invalid agent type' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const response = await agent.processMessage(message, userId);
    return new Response(
      JSON.stringify(response),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in agent chat:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

export async function GET(
  request: Request,
  context: Context
) {
  try {
    const { type } = context.params;
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'userId is required' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return new Response(
        JSON.stringify({ error: 'Invalid agent type' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const history = await agent.getHistory(userId);
    return new Response(
      JSON.stringify({ history }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error fetching chat history:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 