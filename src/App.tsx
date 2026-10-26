import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#faf8f5] font-sans">
      <Header />
      <Hero />
      <Products />
      <Testimonials />
    </div>
  );
}

export default App;
