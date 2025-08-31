// app/notes/page.tsx

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesPage = async ({ params }: Props) => {
  const { slug } = await params;

  const tag = slug[0] === 'All' ? undefined : slug[0];
  // Fetch notes from API
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => fetchNotes({ page: 1, search: '', tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
};

export default NotesPage;
