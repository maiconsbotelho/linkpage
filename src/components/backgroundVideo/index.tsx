import { BgVideoProps } from '@/interfaces/bgVideoProps';

const BackgroundVideo: React.FC<BgVideoProps> = ({
  src,
  className = '',
  controls = false,
  autoPlay = true,
  loop = true,
  muted = true,
  children,
}) => {
  return (
    <div className={`relative h-screen w-full overflow-hidden ${className}`}>
      <video
        className="absolute left-0 top-0 min-h-full min-w-full object-cover"
        src={src}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
};

export default BackgroundVideo;
