import LandingPage from '../components/BasicLanding';
import ChooseUs from '../components/ChooseUs';
import Navbar from '../components/Navbar';

import { Helmet } from 'react-helmet';
import PrimeLocation from '../components/PrimeLocation';
import Footer from '../components/Footer';
import FAQAccordion from '../components/Accordion';

const Homepage = () => {
  return (
    <div className="page">
    <Helmet>
        <title> Teshie Project | Home Page</title>
        <meta name="description" content="Welcome to a world of fashion in africa." />
        <meta name="keywords" content="African Fashion, Unisex, Mens and Women's Wear" />
        <link rel="canonical" href="https://exclusivebabydiva.com/" />
      </Helmet>
      <Navbar />
      <LandingPage />
      <ChooseUs />
      <PrimeLocation />
      <FAQAccordion />
      <Footer />
    </div>
  );
};

export default Homepage;

