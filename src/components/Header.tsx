import Link from "next/link";
import AnimatedLinks from "./AnimatedLinks";
import CTA from "./CTA";

const links = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "work",
    url: "/work",
  },
  {
    title: "about",
    url: "/about",
  },
];

function Header() {
  return (
    <div className="flex items-center justify-center font-inter h-20 w-[95%] mx-auto">
      <div className="flex-1">
        <span className="text-4xl font-bold">LOGO</span>
      </div>
      <div className="flex flex-1 items-center justify-between">
        {links.map((link, i) => (
          <Link className="capitalize font-semibold" key={i} href={link.url}>
            <AnimatedLinks title={link.title} index={i + 1} />
          </Link>
        ))}
        <CTA />
      </div>
    </div>
  );
}

export default Header;
