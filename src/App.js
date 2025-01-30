import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NftMarketReport from './pages/NftMarketReport';
import WhaleIdentification from './pages/WhaleIdentification';
import NftPortfolio from './pages/NftPortfolio';
import WhaleMovementAlert from './pages/WhaleMovementAlerts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nft-market-report" element={<NftMarketReport />} />
        <Route path="/whale-identification" element={<WhaleIdentification />} />
        <Route path="/nft-portfolio" element={<NftPortfolio />} />
        <Route path="/nft-portfolio/:walletAddress" element={<NftPortfolio />} />
        <Route path="/whale-movement-alerts" element={<WhaleMovementAlert />} />
      </Routes>
    </Router>
  );
}

export default App;