import { NextRequest } from 'next/server';
import { AcademicAgent } from '@/lib/agents/academicAgent';

const agents = {
  academic: new AcademicAgent(),
  // Add other agents here as they are implemented
};

// Define the route segment config
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

type RouteSegment = {
  params: {
    type: string;
  };
};

export async function POST(req: NextRequest, { params }: RouteSegment) {
  try {
    const { type } = params;
    const { message, userId } = await req.json();

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

export async function GET(req: NextRequest, { params }: RouteSegment) {
  try {
    const { type } = params;
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get('userId');

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