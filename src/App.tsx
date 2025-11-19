import { Routes, Route } from "react-router-dom";
import { AppThemeProvider } from "./components/layout/ThemeContext";
import ExperienceDetail from "./components/details/ExperienceDetail";
import ProjectDetail from "./components/details/ProjectDetail";
import ResearchDetail from "./components/details/ResearchDetail";
import HomePage from "./pages/HomePage";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Experience from "./components/sections/Experience";
import Awards from "./components/sections/Awards";
import Layout from "./pages/Layout";
import SectionLayout from "./pages/SectionLayout";

export default function App() {
  return (
    <AppThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<SectionLayout />}>
            <Route path="projects" element={<Projects />} />
            <Route path="research" element={<Research />} />
            <Route path="experience" element={<Experience />} />
            <Route path="awards" element={<Awards />} />
            <Route path="experience/:id" element={<ExperienceDetail />} />
            <Route path="project/:id" element={<ProjectDetail />} />
            <Route path="research/:id" element={<ResearchDetail />} />
          </Route>
        </Route>
      </Routes>
    </AppThemeProvider>
  );
}
