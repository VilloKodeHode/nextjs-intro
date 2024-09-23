import Image from "next/image";
import { ClickButton } from "./components/button";



export default function Home() {


  return (
    <main className="grid gap-8 place-content-center min-h-screen">
      <h1>Next.js tutorial</h1>
      <div className="flex flex-wrap">
      <figure className="h-[300px] w-[300px]">
        <Image className="h-full w-full" src="/oldpc.png" width="1200" height="1200" alt="basketimage" />
      </figure>
      <figure className="h-[300px] w-[300px]">
        <img className="h-full w-full" src="/oldpc.png" alt="basketimage" />
      </figure>
      </div>
  <ClickButton/>
    </main>
  );
}
