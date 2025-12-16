import DeuxiemeSection from "../components/view/deuxieme-section";
import Partenaires from "../components/view/partenaire";
import PremierSection from "../components/view/premier-section";
import TroisiemeSection from "../components/view/troisieme-section";
import FooterSection from "../components/view/footer";
import HeroSection from "../components/view/hero-section";
import TestimonialSection from "../components/view/testimonial-section";
import QuatriemeSection from "../components/view/quatrieme-section";
import NewsSection from "../components/view/news-section";
export default function HomePage() {
  return (
    <div>
     
      <HeroSection/>
      <Partenaires />
      <PremierSection />
      <DeuxiemeSection/>
      <TroisiemeSection />
      <QuatriemeSection/>
      {/* <CinquiemeSection/> */}
      <TestimonialSection/>
      <NewsSection/>
      <FooterSection/>
    </div>
  );
}