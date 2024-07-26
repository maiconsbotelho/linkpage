import BackgroundVideo from '@/components/backgroundVideo';
import Links from '@/components/links';
import { TbBrandInstagram, TbBrandTwitterFilled, TbWorld } from 'react-icons/tb';

export default function Home() {
  return (
    <main>
      <BackgroundVideo src="/clipe.mp4">
        <div className="w-full">
          <Links icon={<TbWorld />} title="SpiderKick Store" href="https://www.spiderkick.com/" />
          <Links icon={<TbBrandInstagram />} title="Instagram" href="https://www.instagram.com/spiderandersonsilva/" />
          <Links
            icon={<TbBrandTwitterFilled />}
            title="Twitter"
            href="https://www.instagram.com/spiderandersonsilva/"
          />
        </div>
      </BackgroundVideo>
    </main>
  );
}
