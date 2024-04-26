import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Episodes from './episodes/Episodes';
import Locations from './locations/Locations';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/locations" replace />}
          ></Route>
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
