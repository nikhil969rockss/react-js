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
              {...item}
            />
            <HorizontalLine className="mt-8" />
          </>
        ))}
      </main>
    </div>
  );
};
export default App;
