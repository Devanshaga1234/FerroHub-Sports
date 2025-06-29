import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BookingProvider } from './contexts/BookingContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Courts } from './pages/Courts';
import { Coaching } from './pages/Coaching';
import { Locations } from './pages/Locations';
import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
// import { Dashboard } from './pages/Dashboard';
// import { AdminDashboard } from './pages/AdminDashboard';
import { BookingPage } from './pages/BookingPage';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { ThankYouPage } from './pages/ThankYouPage';
import { Subscribe } from './pages/Subscribe';
import { CoachingDetail } from './pages/CoachingDetail';
import { Community } from './pages/Community';
import { Membership } from './pages/Membership';
import ChatBot from './components/ChatBot'; 

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        {/*<BrowserRouter basename={import.meta.env.BASE_URL}>*/}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courts" element={<Courts />} />
                <Route path="/coaching" element={<Coaching />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/subscribe/:id" element={<Subscribe />} />
                <Route path="/coaching/:id" element={<CoachingDetail />} />
                <Route path="/community" element={<Community />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/chatbot" element={<ChatBot />} />
                {/* <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute adminOnly>
                      <AdminDashboard />
                    </ProtectedRoute>
                  } 
                /> */}
                <Route 
                  path="/booking/:courtId/:slotId" 
                  element={
                    <ProtectedRoute>
                      <BookingPage />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        {/*</BrowserRouter>*/}
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
