import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";

// About
import CompanyOverview from "../pages/about/CompanyOverview/CompanyOverview";
import VisionMission from "../pages/about/VisionMission/VisionMission";
import BoardOfDirectors from "../pages/about/BoardOfDirectors/BoardOfDirectors";
import LeadershipTeam from "../pages/about/LeadershipTeam/LeadershipTeam";
import CompanyHistory from "../pages/about/CompanyHistory/CompanyHistory";
import AwardsRecognition from "../pages/about/AwardsRecognition/AwardsRecognition";

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

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

      </Route>

    </Routes>
  );
}
