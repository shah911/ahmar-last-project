import Loader from "@/components/Loader";
import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import type { AppProps } from "next/app";
import { Inter, Geist_Mono } from "next/font/google";
import { useEffect } from "react";

const geist_Mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const saveScrollPosition = (url: string) => {
  const scrollPositions = JSON.parse(
    sessionStorage.getItem("scrollPositions") || "{}",
  ) as Record<string, number>;

  scrollPositions[url] = window.scrollY;

  sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
};

const restoreScrollPosition = (url: string) => {
  const scrollPositions = JSON.parse(
    sessionStorage.getItem("scrollPositions") || "{}",
  ) as Record<string, number>;

  const position = scrollPositions[url];

  if (position !== undefined) {
    window.scrollTo(0, position);
  }
};

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleRouteChangeStart = (url: string) => {
      saveScrollPosition(url);
    };

    const handleRouteChangeComplete = (url: string) => {
      restoreScrollPosition(url);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);
  return (
    <div className={`${inter.variable} ${geist_Mono.variable} antialiased`}>
      <Loader />
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
