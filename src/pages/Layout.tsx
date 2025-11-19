import { Outlet } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: (theme) =>
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
            : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      }}
    >
      <Navigation />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
