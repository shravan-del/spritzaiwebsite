import { NextRequest } from 'next/server';
import { AcademicAgent } from '@/lib/agents/academicAgent';

const agents = {
  academic: new AcademicAgent(),
  // Add other agents here as they are implemented
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const type = request.nextUrl.pathname.split('/').pop();
    const { message, userId } = await request.json();

    if (!message || !userId) {
      return Response.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return Response.json(
        { error: 'Invalid agent type' },
        { status: 400 }
      );
    }

    const response = await agent.processMessage(message, userId);
    return Response.json(response);

  } catch (error) {
    console.error('Error in agent chat:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.pathname.split('/').pop();
    const userId = request.nextUrl.searchParams.get('userId');

    if (!userId) {
      return Response.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return Response.json(
        { error: 'Invalid agent type' },
        { status: 400 }
      );
    }

    const history = await agent.getHistory(userId);
    return Response.json({ history });

  } catch (error) {
    console.error('Error fetching chat history:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 