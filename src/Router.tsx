import { Routes, Route } from 'react-router-dom'
import { HomePost } from './pages/HomePost'
import { OpenPost } from './pages/OpenPost'

export function Router() {
  // router que faz as paginas rodarem. tem que colocar o Routes por voltar do route
  return (
    <Routes>
      <Route path="/" element={<HomePost />} />
      <Route path="/openpost" element={<OpenPost />} />
    </Routes>
  )
}
