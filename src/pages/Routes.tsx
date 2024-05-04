import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../ui/sections/layout/Layout';
import Episodes from './episodes/Episodes';
import Locations from './locations/Locations';
import { EpisodeDetail } from './episodes/episode-detail/EpisodeDetail';
import { LocationDetail } from './locations/location-detail/LocationDetail';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/locations" replace />}
          ></Route>
          <Route path="/episodes">
            <Route element={<Episodes />} index />
            <Route path=":id" element={<EpisodeDetail />} />
          </Route>
          <Route path="/locations">
            <Route element={<Locations />} index />
            <Route path=":id" element={<LocationDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
