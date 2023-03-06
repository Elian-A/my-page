import Link from "next/link";
import { useState } from "react";
import {
  HomeSvg,
  BookSvg,
  DiarySvg,
  GitHubSvg,
  CloseSvg,
  MenuSvg,
  CompoundSvg,
} from "./Svgs";

const navItems = [
  { title: "home", SvgComponent: HomeSvg, href: "/home" },
  //{ title: "readings", Svg: BookSvg, href: "/readings" },
  //{ title: "routines", Svg: DiarySvg, href: "/routines" },
  { title: "projects", SvgComponent: CompoundSvg, href: "/projects" },
];

const socialItems = [
  {
    title: "Github",
    SvgComponent: GitHubSvg,
    href: "https://github.com/Elian-A",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <header className="relative flex min-h-header items-center px-5 shadow-sm">
      <button onClick={handleToggle}>
        <MenuSvg />
      </button>
      <div
        className={`${
          toggle ? "" : "-translate-x-full"
        } absolute top-0 left-0 z-10 h-screen w-[80%] bg-white shadow-lg transition-all`}
      >
        <div className="ml-5 flex min-h-header items-center">
          <button onClick={handleToggle}>
            <CloseSvg />
          </button>
        </div>
        <nav className="grid gap-6 px-3 pt-6">
          <ul className="navList grid gap-3">
            {navItems.map(({ href, SvgComponent, title }) => (
              <li key={title} className="text-xl">
                <Link href={href} className="flex gap-2">
                  <SvgComponent />
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-neutral-500">Social</h3>
            <ul className="navList grid gap-3 pt-3">
              {socialItems.map(({ href, SvgComponent, title }) => (
                <li key={title} className="text-xl">
                  <Link className="flex gap-2" href={href}>
                    <SvgComponent />
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
