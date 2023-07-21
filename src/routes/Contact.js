import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../assests/desks.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero 
      cName = "hero"
      heroImg = {ContactImg}
      title = "Contact us"
      text = "yashparalikar5@gmail.com || 8847708999"
      url = "/"
      buttonText = "Details"
      btnClass = "show"
      />
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Contact;
