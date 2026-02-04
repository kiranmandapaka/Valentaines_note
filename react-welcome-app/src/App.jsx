import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import ThankYou from './pages/ThankYou';
import Love from './pages/Love';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/love" element={<Love />} />
      </Routes>
    </BrowserRouter>
  );
}