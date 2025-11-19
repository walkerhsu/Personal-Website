import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import DownloadIcon from "@mui/icons-material/Download";

export default function Header() {
  return (
    <Box
      id="header"
      component="header"
      sx={{
        textAlign: "center",
        mb: 8,
        scrollMarginTop: "100px",
      }}
    >
      <Avatar
        src="/avatar.jpeg"
        alt="Ching-Yu (Walker), Hsu"
        sx={{
          width: 128,
          height: 128,
          mx: "auto",
          mb: 3,
        }}
      />

      <Typography variant="h3" component="h1" gutterBottom>
        Ching-Yu (Walker), Hsu
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        gutterBottom
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <SchoolIcon /> National Taiwan University
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        useFlexGap
        flexWrap="wrap"
        sx={{ my: 3 }}
      >
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          href="mailto:walkerhsu0808@gmail.com"
        >
          Contact
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/walkerhsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/walkerhsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          href="/CV.pdf"
          download
        >
          Download CV
        </Button>
      </Stack>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 750, mx: "auto", px: 2 }}
      >
        Passionate about advancing artificial intelligence and machine learning
        to solve real-world problems.
      </Typography>
    </Box>
  );
}
