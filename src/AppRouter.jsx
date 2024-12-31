import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FeaturesPage from './FeaturesPage';
import ModelsPage from './ModelsPage';
import SetupPage from './SetupPage';
import PricingPage from './PricingPage';
import TeamPage from './TeamPage';
import SignInPage from './SignInPage';
import BlogPage from './BlogPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
