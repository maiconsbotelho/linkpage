import Image from 'next/image';
import Profile from '../../../public/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="xs:h-40 xs:w-40 relative h-32 w-32 sm:h-60 sm:w-60">
      <div className="absolute inset-0 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-yellow-500 p-1 sm:p-2">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
          <Image
            src={Profile}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
