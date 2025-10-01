import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 justify-center items-center">
        <h1 className="text-7xl font-thin"> Welcome to our Application!</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
