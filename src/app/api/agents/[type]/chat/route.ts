import { NextResponse } from 'next/server';
import { AcademicAgent } from '@/lib/agents/academicAgent';

const agents = {
  academic: new AcademicAgent(),
  // Add other agents here as they are implemented
};

export async function POST(
  request: Request,
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
  request: Request,
  { params }: { params: { type: string } }
) {
  try {
    const { type } = params;
    const { searchParams } = new URL(request.url);
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