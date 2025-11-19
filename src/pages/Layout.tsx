import { Outlet } from "react-router-dom";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Navigation />
        <Box>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
