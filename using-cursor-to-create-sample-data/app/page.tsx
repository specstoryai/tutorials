import CarGrid from "@/components/car-grid"

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Collectible Cars</h1>
      
      <CarGrid />

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
