import { useState } from "react";

import Logo from "./assets/image/logo.png";

//? componentes
import CommunityUpdates from "./components/CommunityUpdates.tsx";
import Header from "./components/Header";
import Community from "./components/Community.tsx";
import { HeroContent } from "./components/HeroContent.tsx";
import Clients from "./components/Clients.tsx";
import Footer from "./components/Footer.tsx";
import Unlock from "./components/Unlock.tsx";

//? utilidades
import dataCommunityUpdatesProps from "./utility/dataCommunityUpdates.ts";
import dataCommunity from "./utility/dataCommunity.ts";
import dataHeroContent from "./utility/dataHeroContent.ts";
import dataClients from "./utility/dataClients.ts";
import dataFooter from "./utility/dataFooter.ts";
import dataUnlock from "./utility/dataUnlock.ts";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header logo={Logo} />
        <main className="flex-1">
          <Clients dataClients={dataClients} />
          <HeroContent dataHeroContent={dataHeroContent} />
          <Community dataCommunity={dataCommunity} />
          <Unlock dataUnlock={dataUnlock} />
          <CommunityUpdates dataCommunityUpdate={dataCommunityUpdatesProps} />
        </main>
        <Footer dataFooter={dataFooter} />
      </div>
    </>
  );
}

export default App;
