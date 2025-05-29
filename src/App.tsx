import Card from "./components/Card";
import Header from "./components/Header";
import HorizontalLine from "./components/HorizontalLine";
import data from "./utils/data";

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        {data.map((item) => (
          <>
            <Card
              key={item.id}
              img={item.img.src}
              alt={item.img.alt}
              location={item.country}
              content={item.text}
              heading={item.title}
              date={item.dates}
              link={item.googleMapsLink}
            />
            <HorizontalLine className="mt-8" />
          </>
        ))}
      </main>
    </div>
  );
};
export default App;
