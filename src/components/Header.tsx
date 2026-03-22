import Link from "next/link";
import AnimatedLinks from "./AnimatedLinks";
import CTA from "./CTA";
import Menu from "./Menu";

export const links = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: "work",
    url: "/work",
  },
];

function Header() {
  return (
    <div className="flex items-center justify-center font-inter h-20 w-[95%] mx-auto">
      <div className="flex-1 z-99999">
        <Link
          href="/"
          className="text-4xl font-bold text-white tracking-tighter"
        >
          LOGO
        </Link>
      </div>
      <div className="hidden lg:flex flex-1 items-center text-white justify-between z-99999">
        {links.map((link, i) => (
          <Link className="capitalize font-semibold" key={i} href={link.url}>
            <AnimatedLinks title={link.title} index={i + 1} />
          </Link>
        ))}
        <Link href="/contact">
          <CTA />
        </Link>
      </div>
      <div className="lg:hidden flex flex-1 items-center justify-end">
        <Menu />
      </div>
    </div>
  );
}

export default Header;
