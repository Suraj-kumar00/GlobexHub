"use client";

import { useState } from "react";
import CurrencyConverter from "@/components/CurrencyConverter";
import WeatherCard from "@/components/WeatherCard";
import PlacesToVisit from "@/components/PlacesToVisit";
import { LocalFood } from "@/components/LocalFood";

import { COUNTRY_CITY_MAP, COUNTRY_MAP } from "@/lib/constants/countries";

export default function Home() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CurrencyConverter onCurrencyChange={handleCurrencyChange} />
        <WeatherCard city={COUNTRY_CITY_MAP[selectedCurrency]} />
        <PlacesToVisit country={COUNTRY_MAP[selectedCurrency]} />
        <LocalFood country={COUNTRY_MAP[selectedCurrency]} />
      </div>
    </div>
  );
}
