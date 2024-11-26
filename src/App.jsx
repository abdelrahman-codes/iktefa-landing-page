import Nav from "./components/Nav";
import WhatsApp from "./components/WhatsApp";
import { Hero, Products, Services, Footer, Quote, About } from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r">
      <Hero />
    </section>
    <section className="padding-about">
      <About />
    </section>
    <section className="padding">
      <Products />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <Quote />
    </section>

    <section className="padding bg-black padding-x padding-y pb-8">
      <Footer />
    </section>
    <WhatsApp />
  </main>
);

export default App;
