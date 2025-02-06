import Image from "next/image";
import HomePage from "./home/page";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  pageTitle: "CRUD Dashboard",
  title: "CRUD Dashboard",
  description:
    "An IoT project connecting devices to the internet for data collection and analysis.",
  keywords:
    "IoT, Industrial IoT, Real-time monitoring, Cloud-based solutions, Predictive maintenance",
  imageUrl: "next.svg",
  imageWidth: 1200,
  imageHeight: 800,
  imageAlt: "CRUD Dashboard",
  isHomePage: true,
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="light:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}
      <HomePage />
      {/* </main > */}
    </div >
  );
}
