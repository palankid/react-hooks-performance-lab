import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import UseCallbackTest from './pages/UseCallbackTest';
import UseMemoTest from './pages/UseMemoTest';

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex flex-col">
        <Navigation />
        <main className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<UseCallbackTest />} />
            <Route path="/usememotest" element={<UseMemoTest />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
