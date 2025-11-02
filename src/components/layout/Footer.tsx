import { Box, Typography, IconButton, Link as MuiLink, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        © {new Date().getFullYear()} Ching-Yu (Walker), Hsu. All rights reserved.
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={1}>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/walkerhsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/walkerhsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
      <MuiLink href="#header" sx={{ display: "block", mt: 1 }}>
        Back to top
      </MuiLink>
    </Box>
  );
}
