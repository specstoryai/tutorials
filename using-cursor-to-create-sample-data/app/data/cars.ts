interface ClassicCar {
  id: number;
  make: string;
  model: string;
  engineType: string;
  yearStart: number;
  yearEnd: number;
  description: string;
  imagePath: string;
  isFavorite: boolean;
}

export const classicCars: ClassicCar[] = [
  {
    id: 1,
    make: "Chevrolet",
    model: "Corvette C1",
    engineType: "V8, 4.6L",
    yearStart: 1953,
    yearEnd: 1962,
    description: "America's first true sports car, the C1 Corvette established itself as an icon with its distinctive fiberglass body and powerful V8 engine.",
    imagePath: "/chevrolet-corvette-c1.jpg",
    isFavorite: false
  },
  {
    id: 2,
    make: "Ford",
    model: "Mustang GT",
    engineType: "V8, 4.7L",
    yearStart: 1964,
    yearEnd: 1968,
    description: "The original pony car that created an entirely new market segment, featuring a perfect blend of performance and style that captured America's heart.",
    imagePath: "/ford-mustang-gt.jpg",
    isFavorite: false
  },
  {
    id: 3,
    make: "Mercedes-Benz",
    model: "300SL Gullwing",
    engineType: "Inline-6, 3.0L",
    yearStart: 1954,
    yearEnd: 1957,
    description: "Famous for its distinctive gullwing doors and fuel-injected engine, the 300SL was the fastest production car of its time.",
    imagePath: "/mercedes-300sl-gullwing.jpg",
    isFavorite: false
  },
  {
    id: 4,
    make: "Aston Martin",
    model: "DB5",
    engineType: "Inline-6, 4.0L",
    yearStart: 1963,
    yearEnd: 1965,
    description: "Forever immortalized as James Bond's car, the DB5 combined British luxury with impressive performance and timeless styling.",
    imagePath: "/aston-martin-db5.jpg",
    isFavorite: false
  },
  {
    id: 5,
    make: "Ferrari",
    model: "250 GT California",
    engineType: "V12, 3.0L",
    yearStart: 1957,
    yearEnd: 1960,
    description: "One of the most beautiful convertibles ever made, the California Spyder combined Ferrari's racing heritage with elegant open-top touring.",
    imagePath: "/ferrari-250-gt-california.jpg",
    isFavorite: false
  },
  {
    id: 6,
    make: "Jaguar",
    model: "E-Type",
    engineType: "Inline-6, 3.8L",
    yearStart: 1961,
    yearEnd: 1968,
    description: "Dubbed 'the most beautiful car ever made' by Enzo Ferrari, the E-Type combined stunning looks with outstanding performance.",
    imagePath: "/jaguar-e-type.jpg",
    isFavorite: false
  },
  {
    id: 7,
    make: "Porsche",
    model: "356 Speedster",
    engineType: "Flat-4, 1.6L",
    yearStart: 1954,
    yearEnd: 1965,
    description: "The car that established Porsche's reputation, featuring lightweight construction and excellent handling characteristics.",
    imagePath: "/classic-car-placeholder.svg",
    isFavorite: false
  },
  {
    id: 8,
    make: "Alfa Romeo",
    model: "Giulietta Sprint",
    engineType: "Inline-4, 1.3L",
    yearStart: 1954,
    yearEnd: 1965,
    description: "A beautiful Italian sports car that perfectly balanced performance and practicality with its innovative twin-cam engine.",
    imagePath: "/classic-car-placeholder.svg",
    isFavorite: false
  },
  {
    id: 9,
    make: "Maserati",
    model: "3500 GT",
    engineType: "Inline-6, 3.5L",
    yearStart: 1957,
    yearEnd: 1964,
    description: "Maserati's first successful grand touring car, featuring race-derived technology in a luxurious package.",
    imagePath: "/classic-car-placeholder.svg",
    isFavorite: false
  },
  {
    id: 10,
    make: "Plymouth",
    model: "Barracuda",
    engineType: "V8, 4.5L",
    yearStart: 1964,
    yearEnd: 1969,
    description: "A powerful American muscle car that competed with the Mustang, featuring a distinctive fastback design and robust performance.",
    imagePath: "/classic-car-placeholder.svg",
    isFavorite: false
  }
]; 