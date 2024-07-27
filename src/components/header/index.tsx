import ProfileImage from '@/components/profileImage';
import Title from '@/components/title';

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-7 p-4">
      <ProfileImage />
      <Title />
    </header>
  );
};

export default Header;
