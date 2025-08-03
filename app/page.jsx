import HomeMain from "./components/HomeComponents/HomeMain";

export const metadata = {
  title: "Giga Group of Companies - Delivering Excellence Since 1956",
  description:
    "Giga Group is a multi-national business conglomerate with an extensive portfolio and interest in Gold refining, Bullion Trade, Textile, & Real Estate sectors",
  keywords: [
    "Giga Group",
    "Real Estate Pakistan",
    "Gold Refining",
    "Bullion Trade",
    "Textile Industry",
    "Business Conglomerate",
    "Giga Mall",
    "Investment in Pakistan",
    "Property in Islamabad",
  ],
};

export default function Home() {
  return (
    <section>
      <HomeMain />
    </section>
  );
}
