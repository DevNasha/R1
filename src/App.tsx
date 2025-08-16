import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import JDsListPage from './pages/jds/JDsListPage'
import JDsCreatePage from './pages/jds/JDsCreatePage'
import ClientsListPage from './pages/clients/ClientsListPage'
import UploadPage from './pages/upload/UploadPage'
import MatchingPage from './pages/matching/MatchingPage'
import FormatterPage from './pages/formatter/FormatterPage'
import ScoringSettingsPage from './pages/settings/ScoringSettingsPage'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="jds" element={<JDsListPage />} />
        <Route path="jds/new" element={<JDsCreatePage />} />
        <Route path="clients" element={<ClientsListPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="matching" element={<MatchingPage />} />
        <Route path="formatter" element={<FormatterPage />} />
        <Route path="settings/scoring" element={<ScoringSettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}