import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Collection from "./components/Collection.jsx";
import Notes from "./components/Notes.jsx";
import Story from "./components/Story.jsx";
import Footer from "./components/Footer.jsx";

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10">
      <div className="h-px bg-linear-to-r from-transparent via-gold/50 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-cream relative z-10">
      <Navbar />
      <Hero />
      <Divider />
      <Collection />
      <Divider />
      <Notes />
      <Divider />
      <Story />
      <Divider />
      <Footer />
    </div>
  );
}