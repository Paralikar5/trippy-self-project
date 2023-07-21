import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServicesImg from "../assests/service2img.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServicesImg}
        title="Services"
        text="We provide everthing to everyone"
        url="/"
        buttonText="Details"
        btnClass="show"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
