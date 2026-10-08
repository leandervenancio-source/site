/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Redirecionamentos para landing page única */}
          <Route path="diagnostico" element={<Navigate to="/#diagnostico" replace />} />
          <Route path="consultoria-tributaria" element={<Navigate to="/#niveis" replace />} />
          <Route path="solucoes-de-capital" element={<Navigate to="/#niveis" replace />} />
          <Route path="performance-program" element={<Navigate to="/#niveis" replace />} />
          <Route path="materiais" element={<Navigate to="/#diagnostico" replace />} />
          <Route path="assessoria-credito" element={<Navigate to="/#niveis" replace />} />
          <Route path="formacao-ceo-cfo" element={<Navigate to="/#niveis" replace />} />
          <Route path="advisory-program" element={<Navigate to="/#niveis" replace />} />
          {/* Fallback global */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
