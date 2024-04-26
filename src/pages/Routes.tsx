import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Episodes from './episodes/Episodes';
import Locations from './locations/Locations';
import Home from './home/Home';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
