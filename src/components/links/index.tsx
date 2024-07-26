import Container from '@/components/container';
import { LinksProps } from '@/interfaces/linkProps';
import Link from 'next/link';

const Links: React.FC<LinksProps> = ({ icon, title, href }) => {
  return (
    <Container>
      <Link href={href} className="flex my-4 h-12 w-full items-center justify-between rounded-full bg-black bg-opacity-50">
        <div className="ml-3 flex-shrink-0 text-4xl">{icon}</div>
        <div className="-ml-8 flex-grow text-center text-2xl">{title}</div>
      </Link>
    </Container>
  );
};

export default Links;
