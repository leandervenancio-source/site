/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PerformanceProgram } from "./pages/solutions/ProgramaDAPE";
import { AssessoriaCredito } from "./pages/solutions/AssessoriaCredito";
import { Materials } from "./pages/Materials";
import { Diagnostic } from "./pages/Diagnostic";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="performance-program" element={<PerformanceProgram />} />
          <Route path="assessoria-credito" element={<AssessoriaCredito />} />
          {/* Redirecionamento de rotas legadas */}
          <Route path="formacao-ceo-cfo" element={<Navigate to="/performance-program" replace />} />
          <Route path="advisory-program" element={<Navigate to="/performance-program" replace />} />
          <Route path="materiais" element={<Materials />} />
          <Route path="diagnostico" element={<Diagnostic />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
