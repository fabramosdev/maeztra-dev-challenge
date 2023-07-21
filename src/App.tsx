import "./App.css";
import { BestSellers } from "./components/BestSellers";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { NewCollection } from "./components/NewCollection";
import { Newsletter } from "./components/Newsletter";
import { Partners } from "./components/Partners";
import { SiteMap } from "./components/Sitemap";
import { Slider } from "./components/Slider";
import { TipBar } from "./components/TipBar";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <Slider />
      <TipBar />
      <Partners />
      <BestSellers />
      <NewCollection />
      <Newsletter />
      <SiteMap />
      <Footer />
    </>
  );
}

export default App;
