import "@/styles/globals.css";
import { AnimatePresence } from "motion/react";
import type { AppProps } from "next/app";
import { Inter, Geist_Mono } from "next/font/google";

const geist_Mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={`${inter.variable} ${geist_Mono.variable} antialiased`}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
}
