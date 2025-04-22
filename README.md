# JMM Labs Links

A modern Linktree clone for JMM Labs built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Social media links with hover effects
- Action buttons for important links
- Profile information with tags
- Optimized images for fast loading
- SEO-friendly metadata
- Accessibility features

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/jmmlabs/links.git
cd links

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── action-button.tsx  # Action button component
│   ├── social-link.tsx    # Social link component
│   ├── tag.tsx           # Tag component
│   └── ui/               # UI components from shadcn/ui
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## Deployment

This project is configured for easy deployment on Vercel or any other Next.js-compatible hosting platform.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

MIT
