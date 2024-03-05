import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ResourceHub from './pages/ResourceHub';
import About from './pages/About';
import FAQs from './pages/FAQs';
import ContactForm from './pages/ContactForm';
import Deadlines from './pages/Deadlines';
import HabitTracking from './pages/HabitTracking';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resource-hub" element={<ResourceHub />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/habit-tracking" element={<HabitTracking />} />
        </Routes>
      </Router>
      <Footer />
    </AuthProvider>
  );
}

export default App;
