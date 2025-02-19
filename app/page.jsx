"use client";
import Navbar from "@/app/components/Navbar";
import HomeHeroSeaction from "./components/HomeComponents/HomeHeroSeaction";
import HomeAboutSeaction from "./components/HomeComponents/HomeAboutSeaction";
import HomeTopFeatures from "./components/HomeComponents/HomeTopFeatures";
import HomeMap from "./components/HomeComponents/HomeMap";
import DistanceDetails from "./components/HomeComponents/DistanceDetails";
import ExcellenceVision from "./components/HomeComponents/ExcellenceVision";
import ClientSays from "./components/HomeComponents/ClientSays";
import FrequentlyQA from "./components/HomeComponents/FrequentlyQA";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <HomeHeroSeaction />

      <HomeAboutSeaction />

      <HomeTopFeatures />

      <HomeMap />

      <DistanceDetails />

      <ExcellenceVision />

      <ClientSays />

      <FrequentlyQA />
    </main>
  );
}
