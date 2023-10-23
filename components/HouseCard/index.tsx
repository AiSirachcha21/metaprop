import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import styles from "./HouseCard.module.css";

interface HouseCardProps {
  imageSrc: string;
  name: string;
  price: string;
  location: string;
  developer: string;
}

export default function HouseCard({
  developer,
  imageSrc,
  location,
  name,
  price,
}: HouseCardProps) {
  const formatPrice = (price: string) => {
    const usdCurrencyFormatter = Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
      maximumFractionDigits: 0,
    });
    return usdCurrencyFormatter.format(parseInt(price));
  };

  return (
    <Card className={styles.card} data-testid="house-card">
      <CardHeader className="object-cover relative aspect-video m-2">
        <Image src={imageSrc} alt={name} fill className="rounded-sm" />
      </CardHeader>
      <CardContent className={styles.cardBody}>
        <section className={styles.meta}>
          <h1 className={styles.title}>{name}</h1>
          <span className={styles.subtitle}>{location}</span>
          <span className={styles.price}>{formatPrice(price)}</span>
          <span className={styles.developer}>{developer}</span>
        </section>
        <section></section>
      </CardContent>
    </Card>
  );
}
