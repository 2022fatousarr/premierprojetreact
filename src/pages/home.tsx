import DeuxiemeSection from "../components/view/deuxieme-section";
import Header from "../components/view/header";
import Partenaires from "../components/view/partenaire";
import PremierSection from "../components/view/premier-section";
import TroisiemeSection from "../components/view/troisieme-section";


export default function HomePage() {
  return (
    <div>
      <Header/>
      <Partenaires />
      <PremierSection />
      <DeuxiemeSection/>
      <TroisiemeSection />
    </div>
  );
}