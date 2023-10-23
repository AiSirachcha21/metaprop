import Image from "next/image";
import styles from "./page.module.css";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

  const formatPrice = (price: string) => {
    const usdCurrencyFormatter = Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
      maximumFractionDigits: 0,
    });
    return usdCurrencyFormatter.format(parseInt(price));
  };

  return (
    <main className={styles.homeGrid}>
      {homes.map((home, index) => {
        return (
          <Card key={index} className={styles.card}>
            <CardHeader className="object-cover relative aspect-video m-2">
              <Image
                src={home.image}
                alt={home.name}
                fill
                className="rounded-sm"
              />
            </CardHeader>
            <CardContent className={styles.cardBody}>
              <section className={styles.meta}>
                <h1 className={styles.title}>{home.name}</h1>
                <span className={styles.subtitle}>{home.location}</span>
                <span className={styles.price}>{formatPrice(home.price)}</span>
                <span className={styles.developer}>{home.developer}</span>
              </section>
              <section></section>
            </CardContent>
          </Card>
        );
      })}
    </main>
  );
}
