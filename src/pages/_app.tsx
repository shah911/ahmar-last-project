import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${geist_Mono.variable} antialiased`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
