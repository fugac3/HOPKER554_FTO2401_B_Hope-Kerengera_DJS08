
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Vans from '../pages/Vans/Vans';
import VansDetail from '../pages/Vans/VansDetail';
import Dashboard from '../pages/Host/Dashboard'; 
import Income from '../pages/Host/Income';
import Reviews from '../pages/Host/Reviews';
import HostVans from '../pages/Host/HostVans.jsx';
import HostVanDetails from '../pages/Host/HostVanDetails.jsx';
import HostVanPricing from '../pages/Host/HostVanPricing';
import HostVanInfo from '../pages/Host/HostVanInfo.jsx';
import HostVanPhotos from '../pages/Host/HostVanPhotos.jsx';
import NotFound from '../pages/NotFound.jsx';
import Layout from '../components/Layout';
import HostLayout from '../components/HostLayout';
import AuthRequired from "../components/AuthRequired.jsx";
import Login from "../pages/Login.jsx";
import "/server"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

