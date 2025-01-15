import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { classicCars } from "./data/cars"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Collectible Cars</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classicCars.map((car) => (
          <Card key={car.id} className="hover:shadow-lg transition-shadow">
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
        ))}
      </div>
    </div>
  );
}
