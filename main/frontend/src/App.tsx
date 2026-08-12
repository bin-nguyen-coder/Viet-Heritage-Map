import { Routes, Route } from 'react-router-dom'
import MapView from './pages/MapView'
import SiteDetail from './pages/SiteDetail'
import ArtisanChat from './pages/ArtisanChat'
import AudioAnalyzer from './pages/AudioAnalyzer'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route path="/site/:siteId" element={<SiteDetail />} />
        <Route path="/artisan/:personaId" element={<ArtisanChat />} />
        <Route path="/analyzer" element={<AudioAnalyzer />} />
      </Routes>
    </Layout>
  )
}

export default App