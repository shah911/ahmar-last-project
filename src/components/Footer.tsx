import Image from "next/image";
import Link from "next/link";
import CTA from "./CTA";
import { usePathname } from "next/navigation";

export const links = [
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
  {
    title: "contact",
    url: "/contact",
  },
];

function Footer() {
  const pathname = usePathname();
  return (
    <div className="w-[95%] mx-auto font-inter">
      <div className="bg-slate-200 rounded-2xl p-4">
        <div className="relative h-100 w-full flex items-center justify-center">
          <span className="font-bold text-4xl absolute z-10 text-white">
            LOGO
          </span>
          <Image
            src="/demo.jpg"
            alt="demo"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        {/* section 2 */}
        <div className="w-full my-20 flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col lg:px-10">
            <h3 className="opacity-50 font-semibold text-3xl lg:text-5xl tracking-tight">
              Stay connected®
            </h3>
            <Link
              className="font-semibold text-3xl lg:text-5xl underline tracking-tight"
              href="mailto:demo@mail.com"
            >
              demo@mail.com
            </Link>
            <p className="my-10 lg:w-[75%]">
              {
                "Crafted with creativity and passion. Let’s stay connected reach out anytime!"
              }
            </p>
            <Link href="/contact">
              <CTA />
            </Link>
          </div>
          <div className="flex-1 flex flex-col my-10 md:my-0">
            <hr className="h-px opacity-20 lg:w-[75%]" />
            {links.map((link, i) => (
              <div key={i} className="flex flex-col">
                <Link
                  href={link.url}
                  className={`capitalize flex items-center lg:w-[75%] justify-between py-4 hover:opacity-100 transition-opacity duration-500 ${pathname === link.url ? "opacity-100" : "opacity-50"}`}
                >
                  <div>
                    <span className="font-geist-mono text-xs">
                      {"0" + (i + 1)}/
                    </span>
                    {link.title}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <title>arrow_right_line</title>
                    <g id="arrow_right_line" fill="none" fillRule="nonzero">
                      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                      <path
                        fill="#000000FF"
                        d="m14.707 5.636 5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414Z"
                      />
                    </g>
                  </svg>
                </Link>
                <hr className="h-px opacity-20 lg:w-[75%]" />
              </div>
            ))}
          </div>
        </div>
        {/* section 3 */}
        <div className="px-10">
          <hr className="h-px opacity-20" />
          <div className="flex items-center justify-center">
            <div className="flex-3">
              <span className="text-9xl font-bold leading-[100%] tracking-tight">
                LOGO
              </span>
            </div>
            <div className="flex-1 relative">
              <Image
                src="/demo.jpg"
                alt="demo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <hr className="h-px opacity-20" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
