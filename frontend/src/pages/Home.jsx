import { Navbar,List, Card, Suggestion } from "../component";
import { Text } from "../library";
const Home = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <List />
        <Suggestion />
        <Text
          className="text-xl my-6 uppercase font-semibold"
          title="this simple title"
        />
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 "
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
