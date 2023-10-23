import Image from "next/image";
import styles from "./page.module.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HouseCard from "@/components/HouseCard";

export interface Home {
  name: string;
  image: string;
  price: string;
  location: string;
  developer: string;
}

async function getHomes() {
  const res = await fetch(new URL(`default/getHouseInfo`, process.env.API_URL));

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const json = await res.json();
  return json as Home[];
}

export default async function Home() {
  const homes = await getHomes();

  return (
    <main className={styles.homeGrid} test-id="home-grid">
      {homes.map((home, index) => {
        return (
          <HouseCard
            key={index}
            imageSrc={home.image}
            name={home.name}
            location={home.location}
            price={home.price}
            developer={home.developer}
          />
        );
      })}
    </main>
  );
}
