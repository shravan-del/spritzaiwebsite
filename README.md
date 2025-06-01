# CommunityAI - Virginia Tech's AI-Powered Platform

An AI agent-powered, community-centered platform designed specifically for Virginia Tech students, faculty, and organizations.

## Features

- 🎓 Academic Advising
  - Course planning and recommendations
  - Prerequisites and requirements tracking
  - Professor information and grade distributions
  - Academic pathways guidance

- 🏛 Campus Life
  - Event recommendations
  - Dining options and menus
  - Campus navigation assistance
  - Student organization information

- 👥 Community Connection
  - Real-time AI assistance
  - Personalized responses
  - Chat history
  - Event coordination

## Tech Stack

- Frontend:
  - Next.js 15
  - React 18
  - TypeScript
  - Tailwind CSS
  - Radix UI Components

- Backend:
  - Supabase
  - OpenAI
  - Render (deployment)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shravan-del/spritzaiwebsite.git
cd spritzaiwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your API keys and configuration.

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
spritzaiwebsite/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   └── agents/
│   └── styles/
│       └── globals.css
├── public/
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
