import { NextRequest, NextResponse } from 'next/server';
import { AcademicAgent } from '@/lib/agents/academicAgent';

const agents = {
  academic: new AcademicAgent(),
  // Add other agents here as they are implemented
};

// Define the route segment config
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;
    const { message, userId } = await request.json();

    if (!message || !userId) {
      return NextResponse.json(
        { error: 'Message and userId are required' },
        { status: 400 }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return NextResponse.json(
        { error: 'Invalid agent type' },
        { status: 400 }
      );
    }

    const response = await agent.processMessage(message, userId);
    return NextResponse.json(response);

  } catch (error) {
    console.error('Error in agent chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId is required' },
        { status: 400 }
      );
    }

    const agent = agents[type as keyof typeof agents];
    if (!agent) {
      return NextResponse.json(
        { error: 'Invalid agent type' },
        { status: 400 }
      );
    }

    const history = await agent.getHistory(userId);
    return NextResponse.json({ history });

  } catch (error) {
    console.error('Error fetching chat history:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 