import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { MedicalAesthetics } from "./screens/MedicalAesthetics/MedicalAesthetics";
import { FacialRejuvenation } from "./screens/FacialRejuvenation/FacialRejuvenation";
import { InjectablesPage } from "./screens/InjectablesPage/InjectablesPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/medical-aesthetics" element={<MedicalAesthetics />} />
        <Route path="/facial-rejuvenation" element={<FacialRejuvenation />} />
        <Route path="/injectables/*" element={<InjectablesPage />} />
        <Route path="/facials/*" element={<MedicalAesthetics />} />
        <Route path="/wellness/*" element={<FacialRejuvenation />} />
        <Route path="/vip-membership" element={<ElementLight />} />
        <Route path="/gift-cards" element={<ElementLight />} />
        <Route path="/about" element={<ElementLight />} />
        <Route path="/contact" element={<ElementLight />} />
      </Routes>
    </Router>
  </StrictMode>,
);
