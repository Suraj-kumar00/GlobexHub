"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const PLACES = {
  USA: [
    {
      name: "New York City",
      description: "The city that never sleeps",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
      link: "https://www.nycgo.com/",
    },
    {
      name: "San Francisco",
      description: "The Golden Gate City",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      link: "https://www.sftravel.com/",
    },
  ],
  UK: [
    {
      name: "London",
      description: "The historic capital",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
      link: "https://visitlondon.com/",
    },
    {
      name: "Edinburgh",
      description: "Scotland's cultural capital",
      image: "https://images.unsplash.com/photo-1506377585622-bedcbb027afc",
      link: "https://edinburgh.org/",
    },
  ],
  // Add more countries and their places
};

export default function PlacesToVisit({ country }: { country: string }) {
  const places = PLACES[country as keyof typeof PLACES] || [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Places to Visit in {country}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {places.map((place) => (
            <a
              key={place.name}
              href={place.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-semibold flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {place.name}
                    </h3>
                    <p className="text-white/80 text-sm">{place.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
