import "./App.css";
import Choose from "./components/Choose/Choose";
import ContactForm from "./components/ContactForm/ContactForm";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import FreeDemo from "./components/FreeDemo/FreeDemo";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Reasons from "./components/Reasons/Reasons";
import Subjects from "./components/Subjects/Subjects";
import Testimonials from "./components/Testimonials/Testimonials";
import TutorNumbers from "./components/TutorNumbers/TutorNumbers";
import Tutors from "./components/Tutors/Tutors";
import Working from "./components/Working/Working";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Reasons />
      <Subjects />
      <Testimonials />
      <Working />
      <FreeDemo />
      <Tutors />
      <TutorNumbers />
      {/* <Choose /> */}
      <ContactForm />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
