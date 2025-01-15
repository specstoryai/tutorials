import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { classicCars } from "./data/cars"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Collectible Cars</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classicCars.map((car) => (
          <Card key={car.id} className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={car.imagePath}
                alt={`${car.make} ${car.model}`}
                fill
                className="object-cover"
                priority={car.id === 1}
              />
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
        ))}
      </div>

      <footer className="mt-16 text-sm text-muted-foreground border-t pt-8">
        <p className="max-w-[90ch]">
          CC Image attribution: {" "}
          <a href="https://www.flickr.com/photos/37691369@N08/9506690410" className="hover:underline">RL GNZLZ</a>, {" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=8447368" className="hover:underline">cosmic_spanner</a>, {" "}
          <a href="https://www.flickr.com/photos/88123769@N02/16643031603" className="hover:underline">Bernard Spragg</a>, {" "}
          <a href="https://www.flickr.com/photos/58907675@N00/440677366" className="hover:underline">stephenhanafin</a>, {" "}
          <a href="https://www.flickr.com/photos/119886413@N05/13942256144" className="hover:underline">Michel Curi</a>, {" "}
          <a href="https://www.flickr.com/photos/8868801@N03/6788708676" className="hover:underline">kemeko1971</a>
        </p>
      </footer>
    </div>
  );
}
