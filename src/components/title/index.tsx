import Image from 'next/image';
import Check from '../../../public/verificado.png';

const Title = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <h1 className="xs:text-2xl text-center text-lg font-bold text-white sm:text-4xl">
            Anderson
            <span className="text-gradient"> &quot;SPIDER&quot; </span>
            Silva
          </h1>
        </div>
        <div>
          <Image
            className="hidden sm:inline-block"
            src={Check}
            alt="Check"
            width={20}
            height={20}
          />
        </div>
        <div>
          <Image
            className="sm:hidden"
            src={Check}
            alt="Check"
            width={15}
            height={15}
          />
        </div>
      </div>

      <p className="text-center text-white">The best in the world</p>
    </div>
  );
};

export default Title;
