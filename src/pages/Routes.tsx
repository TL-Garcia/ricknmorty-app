import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
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
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<EpisodeDetail />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:id" element={<LocationDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
