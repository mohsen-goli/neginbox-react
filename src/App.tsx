import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContacts from "./components/FloatingContacts";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f8f7f4] font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <Testimonials />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}

export default App;
