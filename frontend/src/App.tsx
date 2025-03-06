import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import { LoadingScreen } from './components/layout/LoadingScreen.tsx'
import { MainLayout } from './layout/MainLayout.tsx'
import { Home } from './components/public/Home.tsx'
import { About } from './components/public/About.tsx'
import { Projects } from './components/public/Projects.tsx'
import { Contact } from './components/public/Contact.tsx'
import { Posts } from './components/public/Posts.tsx'


export function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Exibe o loading apenas na primeira vez que o site é acessado
  if (!isLoaded) {
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts" element={<Posts />}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
