import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ElementLight } from "./screens/ElementLight/ElementLight";
import { MedicalAesthetics } from "./screens/MedicalAesthetics/MedicalAesthetics";
import { FacialRejuvenation } from "./screens/FacialRejuvenation/FacialRejuvenation";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/medical-aesthetics" element={<MedicalAesthetics />} />
        <Route path="/facial-rejuvenation" element={<FacialRejuvenation />} />
      </Routes>
    </Router>
  </StrictMode>,
);