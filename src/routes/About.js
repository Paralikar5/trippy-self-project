import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assests/aboutusimage.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="About Our Page"
        text="Everything you need to know"
        // url = "/"
        // buttonText = "Details"
        // btnClass = "show"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
