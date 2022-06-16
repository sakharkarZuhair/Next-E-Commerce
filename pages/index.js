import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClothWear</title>
        <meta
          name="description"
          content="ClothWear - Order Online Decent Clothes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-4 bg-slate-400">This is me</div>
      <div className="bg-slate-300">This is me</div>
    </div>
  );
}
