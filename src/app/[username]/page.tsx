import { fetchUserByUsername } from '@/lib/api';
import BioCard from '@/components/BioCard';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { username: string };
}

export default async function UserProfile({ params }: PageProps) {
  const { username } = params;

  let user = null;

  try {
    user = await fetchUserByUsername(username);
  } catch (error) {
    notFound();
  }

  if (!user || !user.verified) {
    notFound();
  }

  return (
    <div className={user.theme === 'dark' ? 'dark' : ''}>
      <BioCard user={user} />
    </div>
  );
}
