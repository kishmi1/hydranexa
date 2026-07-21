import Hero from "../../components/home/Hero/Hero";
import Stats from "../../components/home/Stats/Stats";
import CompanyOverview from "../../components/home/CompanyOverview/CompanyOverview";
import FeaturedProjects from "../../components/home/FeaturedProjects/FeaturedProjects";
import Sustainability from "../../components/home/Sustainability/Sustainability";
import InvestorHighlights from "../../components/home/InvestorHighlights/InvestorHighlights";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CompanyOverview />
      <FeaturedProjects />
      <Sustainability/>
      <InvestorHighlights/>
    </>
  );
}
