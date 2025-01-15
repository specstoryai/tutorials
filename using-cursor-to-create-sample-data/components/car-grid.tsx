"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { classicCars } from "../app/data/cars"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function CarGrid() {
  const [cars, setCars] = useState(classicCars);

  const toggleFavorite = (id: number) => {
    setCars(currentCars => {
      return currentCars.map(car => 
        car.id === id ? { ...car, isFavorite: !car.isFavorite } : car
      ).sort((a, b) => a.id - b.id); // Keep original order within each section
    });
  };

  const favoriteCars = cars.filter(car => car.isFavorite);
  const unfavoriteCars = cars.filter(car => !car.isFavorite);

  const CarCard = ({ car }: { car: typeof cars[0] }) => (
    <Card key={car.id} className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={car.imagePath}
          alt={`${car.make} ${car.model}`}
          fill
          className="object-cover"
          priority={car.id === 1}
        />
        <Button
          variant={car.isFavorite ? "default" : "secondary"}
          size="icon"
          className="absolute top-2 right-2 z-10"
          onClick={() => toggleFavorite(car.id)}
        >
          <Heart 
            className={car.isFavorite ? "text-red-500 fill-red-500" : ""} 
            size={20} 
          />
        </Button>
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col gap-1">
          <span className="text-xl">{car.make}</span>
          <span className="text-2xl text-primary">{car.model}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Engine:</span>
            <span>{car.engineType}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium">Production:</span>
            <span>{car.yearStart} - {car.yearEnd}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{car.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-12">
      {favoriteCars.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6">Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-2xl font-semibold mb-6">All Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {unfavoriteCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </div>
  );
} 