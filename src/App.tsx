import { useState } from "react";

import Logo from "./assets/image/logo.png";

//? componentes
import CommunityUpdates from "./components/CommunityUpdates.tsx";
import Header from "./components/Header";
import Community from "./components/Community.tsx";
import { HeroContent } from "./components/HeroContent.tsx";

//? utilidades
import dataCommunityUpdatesProps from "./utility/dataCommunityUpdates.ts";
import dataCommunity from "./utility/dataCommunity.ts";
import dataHeroContent from "./utility/dataHeroContent.ts";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header logo={Logo} />
        <main className="flex-1">
          <HeroContent dataHeroContent={dataHeroContent} />
          <Community dataCommunity={dataCommunity} />
          <CommunityUpdates dataCommunityUpdate={dataCommunityUpdatesProps} />
        </main>
      </div>
    </>
  );
}

export default App;
