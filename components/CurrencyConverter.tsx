"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CURRENCIES = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "INR",
];

type CurrencyConverterProps = {
  onCurrencyChange: (currency: string) => void;
};

export default function CurrencyConverter({
  onCurrencyChange,
}: CurrencyConverterProps) {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setResult(parseFloat(amount) * rate);
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  };

  const handleFromCurrencyChange = (currency: string) => {
    setFromCurrency(currency);
    onCurrencyChange(currency);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Currency Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="grid grid-cols-2 gap-4">
            <Select
              value={fromCurrency}
              onValueChange={handleFromCurrencyChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="From" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue placeholder="To" />
              </SelectTrigger>
              <SelectContent>
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {currency}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <button
            className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2"
            onClick={handleConvert}
          >
            Convert
          </button>
          {result !== null && (
            <p className="text-center mt-4">
              {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
