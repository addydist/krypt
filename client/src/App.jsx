import {
  Welcome,
  Navbar,
  Footer,
  Services,
  Transaction,
} from "./components/index";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />

      <Footer />
    </div>
  );
};

export default App;
