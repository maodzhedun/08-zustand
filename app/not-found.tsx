// app/not-found.tsx
import type { Metadata } from 'next';
import css from './Home.module.css';

// import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NoteHub - Your Digital Note-Taking App',
  description:
    'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
  openGraph: {
    title: 'NoteHub - Your Digital Note-Taking App',
    description:
      'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
    url: 'https://notehub-public.goit.study/api/notes',
    siteName: 'NoteHub',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NoteHub - Your Digital Note-Taking App',
    description:
      'Organize your thoughts, ideas, and tasks with NoteHub - the ultimate note-taking application for productivity and creativity.',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.description}>Sorry, the page you&#39;re looking for doesn&#39;t exist.</p>
      {/* <Link href="/">Go back home</Link> */}
    </div>
  );
};

export default NotFound;
