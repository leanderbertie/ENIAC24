import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import EventDetails from './pages/EventDetails';

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
}