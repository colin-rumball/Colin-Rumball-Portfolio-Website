import Link from "next/link";

interface Props extends React.ComponentPropsWithoutRef<"header"> {}

const Header = (props: Props) => {
  return (
    <header
      {...props}
      className="mb-12 md:mb-auto md:flex-1 md:sticky md:top-0 md:h-screen md:w-1/2 md:justify-between md:flex md:flex-col"
    >
      <div>
        <h1>Colin Rumball</h1>
        <h2>Web Developer</h2>
        <p>I build products, solve problems, and make tools.</p>
        <nav className="my-12 hidden md:block">
          <ul>
            <li>
              <Link className="border-b-2 border-l-2" href="/about">
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="flex flex-row gap-2 my-4">
        <li className="rounded-full bg-blue-400 text-slate-700 flex justify-center px-2 py-1 hover:bg-pink-400 cursor-pointer">
          A
        </li>
        <li className="rounded-full bg-blue-400 text-slate-700 flex justify-center px-2 py-1 hover:bg-pink-400 cursor-pointer">
          B
        </li>
        <li className="rounded-full bg-blue-400 text-slate-700 flex justify-center px-2 py-1 hover:bg-pink-400 cursor-pointer">
          C
        </li>
      </ul>
    </header>
  );
};

export default Header;
