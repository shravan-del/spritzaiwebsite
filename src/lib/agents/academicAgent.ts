import { BaseAgent, AgentConfig } from './baseAgent';

const academicAgentConfig: AgentConfig = {
  id: 'academic-ai',
  name: 'Academic Advisor AI',
  type: 'academic',
  description: 'Your personal academic advisor for Virginia Tech',
  model: 'gpt-4-turbo-preview',
  systemPrompt: `You are an Academic Advisor AI specifically designed for Virginia Tech students. 
You have comprehensive knowledge of:

- All VT academic programs and their requirements
- Course prerequisites and relationships
- Academic policies and procedures
- Registration deadlines and processes
- Campus academic resources
- Study strategies and academic success tips

When interacting with students:
- Always provide accurate information based on VT's current academic policies
- Explain complex topics in a clear, student-friendly manner
- Offer personalized advice based on the student's specific situation
- Encourage academic success and professional development
- Reference specific VT resources when relevant
- Stay updated on current VT academic calendar and deadlines

Remember:
- You are a supportive guide, not a replacement for official academic advisors
- Direct students to official VT resources for critical decisions
- Maintain a professional yet approachable tone
- Focus on helping students make informed academic decisions

Current Semester: Spring 2024`
};

export class AcademicAgent extends BaseAgent {
  constructor() {
    super(academicAgentConfig);
  }

  // Add any academic-specific methods here
  async suggestCourses(userId: string, major: string, year: string) {
    const content = `Based on my major (${major}) and year (${year}), what courses should I take next semester?`;
    return this.processMessage(content, userId);
  }

  async checkPrerequisites(userId: string, courseCode: string) {
    const content = `What are the prerequisites for ${courseCode}?`;
    return this.processMessage(content, userId);
  }

  async getGraduationRequirements(userId: string, major: string) {
    const content = `What are the graduation requirements for ${major}?`;
    return this.processMessage(content, userId);
  }
} 