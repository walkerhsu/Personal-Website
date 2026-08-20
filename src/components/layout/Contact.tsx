import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  return (
    <Box sx={{ textAlign: "center", py: 4, padding: 0 }}>
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <Box>
        <IconButton
          href="https://github.com/walkerhsu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/chingyuhsu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton href="mailto:walkerhsu0808@gmail.com">
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;
