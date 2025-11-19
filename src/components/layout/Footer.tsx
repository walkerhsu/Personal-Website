import { Box, Typography } from "@mui/material";
import Contact from "./Contact";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "transparent",
        textAlign: "center",
      }}
    >
      <Contact />
      <Typography variant="body2" color="text.secondary" gutterBottom>
        © {new Date().getFullYear()} Ching-Yu (Walker), Hsu. All rights
        reserved.
      </Typography>
    </Box>
  );
}
