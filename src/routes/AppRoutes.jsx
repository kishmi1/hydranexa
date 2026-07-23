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
