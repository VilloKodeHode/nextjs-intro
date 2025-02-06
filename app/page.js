import Image from "next/image";
import { ClickButton } from "./components/button";

export default function Home() {
  return (
    <main className="grid min-h-screen gap-8 place-content-center">
      <h1>Next.js tutorial</h1>
      <div className="flex flex-wrap">
        <figure className="h-[300px] w-[300px]">
          <Image
            className="w-full h-full"
            src="/oldpc.png"
            width="1200"
            height="1200"
            alt="basketimage"
          />
        </figure>
        <figure className="h-[300px] w-[300px]">
          <img className="w-full h-full" src="/oldpc.png" alt="basketimage" />
        </figure>
      </div>
      <ClickButton />
    </main>
  );
}
