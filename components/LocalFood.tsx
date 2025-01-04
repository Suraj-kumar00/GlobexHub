"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { COUNTRY_DATA } from "@/lib/constants/countries";

interface LocalFoodProps {
  country: string;
}

export function LocalFood({ country }: LocalFoodProps) {
  const foods = COUNTRY_DATA[country as keyof typeof COUNTRY_DATA]?.foods || [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Famous Food in {country}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {foods.map((food) => (
            <div key={food.name} className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold flex items-center">
                      <Utensils className="h-4 w-4 mr-2" />
                      {food.name}
                    </h3>
                    <p className="text-white/80 text-sm">{food.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
