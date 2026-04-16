/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AdvisoryProgram } from "./pages/solutions/ProgramaMGI";
import { PerformanceProgram } from "./pages/solutions/ProgramaDAPE";
import { Materials } from "./pages/Materials";
import { Diagnostic } from "./pages/Diagnostic";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="advisory-program" element={<AdvisoryProgram />} />
          <Route path="performance-program" element={<PerformanceProgram />} />
          <Route path="materiais" element={<Materials />} />
          <Route path="diagnostico" element={<Diagnostic />} />
        </Route>
      </Routes>
    </Router>
  );
}
