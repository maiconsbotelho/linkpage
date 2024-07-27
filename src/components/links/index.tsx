import { LinksProps } from '@/interfaces/linkProps';
import Link from 'next/link';

const Links: React.FC<LinksProps> = ({ imgSrc, title, href, imgClass }) => {
  return (
    <Link
      href={href}
      target='_blank'
      className="my-4 flex h-12 w-full items-center justify-between rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black"
    >
      <div className={`ml-3 flex-shrink-0 ${imgClass}`}>
        <img src={imgSrc} alt={title} className="h-8 w-8" />{' '}
       
      </div>
      <div className="-ml-8 flex-grow text-center text-base xs:text-lg sm:text-2xl">{title}</div>
    </Link>
  );
};

export default Links;
