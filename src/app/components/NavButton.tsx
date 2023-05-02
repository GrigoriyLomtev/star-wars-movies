import Link from 'next/link';

interface INavButton {
  href: string;
  text: string;
}

const NavButton = ({ text, href }: INavButton) => {
  return (
    <Link href={href}>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{text}</button>
    </Link>
  );
};

export default NavButton;
