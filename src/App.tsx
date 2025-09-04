import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { CoursesPage } from './components/CoursesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ApplicationsPage } from './components/ApplicationsPage';
import { LearnershipDetailPage } from './components/LearnershipDetailPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplicationsPage />} />
          <Route path="/learnership/:programId" element={<LearnershipDetailPage />} />
          {/* Catch-all route - redirects any unmatched paths to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}