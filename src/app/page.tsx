import BackgroundVideo from '@/components/backgroundVideo';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Links from '@/components/links';

export default function Home() {
  return (
    <BackgroundVideo src="/clipe.mp4">
      <main className="mt-20 flex w-full flex-col items-center justify-start">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div>
              <Header />
            </div>
            <div className="w-full ">
              <Links
                imgSrc="./internet.png"
                title="SpiderKick Store"
                href="https://www.spiderkick.com/"
              />
              <Links
                imgSrc="./instagram.png"
                title="Instagram"
                href="https://www.instagram.com/spiderandersonsilva/"
              />
              <Links
                imgSrc="./twitter.png"
                title="Twitter"
                href="https://x.com/spideranderson"
              />
              <Links
                imgSrc="./youtube.png"
                title="Melhores Knockouts"
                href="https://www.youtube.com/watch?v=2Icb95RD5vo"
              />
            </div>
          </div>
        </Container>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </main>
    </BackgroundVideo>
  );
}
