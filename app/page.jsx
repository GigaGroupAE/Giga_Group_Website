"use client";
import Navbar from "@/app/components/Navbar";
import HomeHeroSeaction from "./components/HomeComponents/HomeHeroSeaction";
import HomeAboutSeaction from "./components/HomeComponents/HomeAboutSeaction";
import HomeTopFeatures from "./components/HomeComponents/HomeTopFeatures";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <HomeHeroSeaction />

      <HomeAboutSeaction />

      <HomeTopFeatures />
    </main>
  );
}
