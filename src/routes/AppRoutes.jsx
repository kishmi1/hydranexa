import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";

// About
import CompanyOverview from "../pages/About/CompanyOverview/CompanyOverview";
import VisionMission from "../pages/About/VisionMission/VisionMission";
import BoardOfDirectors from "../pages/About/BoardOfDirectors/BoardOfDirectors";
import LeadershipTeam from "../pages/About/LeadershipTeam/LeadershipTeam";
import CompanyHistory from "../pages/About/CompanyHistory/CompanyHistory";
import AwardsRecognition from "../pages/About/AwardsRecognition/AwardsRecognition";

// Projects
import AllProjects from "../pages/Projects/AllProjects/AllProjects";
import OngoingProjects from "../pages/Projects/OngoingProjects/OngoingProjects";
import CompletedProjects from "../pages/Projects/CompletedProjects/CompletedProjects";
import UpcomingProjects from "../pages/Projects/UpcomingProjects/UpcomingProjects";
import ProjectMap from "../pages/Projects/ProjectMap/ProjectMap";

import FinancialHighlights from "../pages/investor/FinancialHighlights/FinancialHighlights";
import AnnualReports from "../pages/investor/AnnualReports/AnnualReports";
import ShareInformation from "../pages/investor/ShareInformation/ShareInformation";
import CorporateGovernance from "../pages/investor/CorporateGovernance/CorporateGovernance";
import Downloads from "../pages/investor/Downloads/Downloads";

import LatestNews from "../pages/news/LatestNews/LatestNews";
import Events from "../pages/news/Events/Events";
import PressReleases from "../pages/news/PressReleases/PressReleases";
import MediaGallery from "../pages/news/MediaGallery/MediaGallery";
import MediaGallery from "../pages/news/MediaGallery/MediaGallery";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        {/* About */}

        <Route
          path="/about/company-overview"
          element={<CompanyOverview />}
        />

        <Route
          path="/about/vision-mission"
          element={<VisionMission />}
        />

        <Route
          path="/about/board-of-directors"
          element={<BoardOfDirectors />}
        />

        <Route
          path="/about/leadership-team"
          element={<LeadershipTeam />}
        />

        <Route
          path="/about/company-history"
          element={<CompanyHistory />}
        />

        <Route
          path="/about/awards-recognition"
          element={<AwardsRecognition />}
        />

        {/* Projects */}

        <Route
          path="/projects"
          element={<AllProjects />}
        />
        <Route
  path="/projects/ongoing"
  element={<OngoingProjects />}
/>

<Route
  path="/projects/completed"
  element={<CompletedProjects />}
/>
<Route
  path="/projects/upcoming"
  element={<UpcomingProjects />}
/>
<Route
  path="/projects/project-map"
  element={<ProjectMap />}
/>

<Route
  path="/investor/financial-highlights"
  element={<FinancialHighlights />}
/>

<Route
  path="/investor/annual-reports"
  element={<AnnualReports />}
/>

<Route
  path="/investor/share-information"
  element={<ShareInformation />}
/>

<Route
  path="/investor/corporate-governance"
  element={<CorporateGovernance />}
/>
<Route
  path="/investor/downloads"
  element={<Downloads />}
/>

<Route
  path="/news/latest-news"
  element={<LatestNews />}
/>

<Route
  path="/news/events"
  element={<Events />}
/>

<Route
  path="/news/press-releases"
  element={<PressReleases />}
/>

<Route
  path="/news/media-gallery"
  element={<MediaGallery />}
/>

<Route
  path="/news/media-gallery"
  element={<MediaGallery />}
/>
      </Route>

    </Routes>
  );
}
