import './App.css';  // Make sure your styles are in App.css
import Home from './pages/Home';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes

function App() {
  return (
    <Router> {/* Only one Router here */}
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Taskify</h1> {/* Use basic HTML elements */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks/new" element={<NewTask />} />
          <Route path="/tasks/:id" element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
