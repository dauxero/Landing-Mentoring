import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Logo from "./assets/image/logo.png";

//? componentes
import CommunityUpdates from "./components/CommunityUpdates.tsx";
import Header from "./components/Header";
import Community from "./components/Community.tsx";
import { HeroContent } from "./components/HeroContent.tsx";
import Clients from "./components/Clients.tsx";
import Footer from "./components/Footer.tsx";
import Unlock from "./components/Unlock.tsx";
import DemoPage from "./components/DemoPage.tsx";
import LearnMorePage from "./components/LearnMorePage.tsx";
//? utilidades
import dataCommunityUpdatesProps from "./utility/dataCommunityUpdates.ts";
import dataCommunity from "./utility/dataCommunity.ts";
import dataHeroContent from "./utility/dataHeroContent.ts";
import dataClients from "./utility/dataClients.ts";
import dataFooter from "./utility/dataFooter.ts";
import dataUnlock from "./utility/dataUnlock.ts";
import dataStatsContent from "./utility/dataStatsContent.ts";
import StatsContent from "./components/StatsContent.tsx";

const HomePage = () => {
  return (
    <>
      <main className="flex-1 ">
        <Clients dataClients={dataClients} />
        <HeroContent dataHeroContent={dataHeroContent} />
        <Community dataCommunity={dataCommunity} />
        <Unlock dataUnlock={dataUnlock} />
        <StatsContent dataStatsContent={dataStatsContent} />
        <CommunityUpdates dataCommunityUpdate={dataCommunityUpdatesProps} />
      </main>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header logo={Logo} />}>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Footer dataFooter={dataFooter} />
              </>
            }
          />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
