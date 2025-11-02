import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import Header from "./components/sections/Header";
import Projects from "./components/sections/Projects";
import Research from "./components/sections/Research";
import Experience from "./components/sections/Experience";
import Awards from "./components/sections/Awards";
import ExperienceDetail from "./components/details/ExperienceDetail";
import ProjectDetail from "./components/details/ProjectDetail";
import ResearchDetail from "./components/details/ResearchDetail";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
    },
    secondary: {
      main: "#9333ea",
    },
    background: {
      default: "#f8fafc",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

const MainLayout = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <Navigation onNavigate={scrollToSection} />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Header />
        <Projects />
        <Research />
        <Experience />
        <Awards />
      </Container>
      <Footer />
    </Box>
  );
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        }}
      >
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}