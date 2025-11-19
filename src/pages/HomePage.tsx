import { Container, Box, Typography, Button, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import backgroundImg from "/background.jpg";
import CV from "/CV.pdf";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          color: "text.primary",
          textAlign: "right",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "40px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.7)"
                : "rgba(255, 255, 255, 0.55)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              mb: 1,
            }}
          >
            許景淯 Ching-Yu, Hsu
          </Typography>
          <Typography
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              mb: 0.75,
            }}
          >
            AI Enthusiast | Software Engineer
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              mb: 0.75,
            }}
          >
            <SchoolIcon /> National Taiwan University
          </Typography>

          <Typography
            variant="body1"
            maxWidth="50%"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              ml: "auto",
            }}
          >
            Ching-Yu Hsu is an undergrad majoring in Electrical Engineering at
            National Taiwan University. He is also a software developer with
            experience exploring the world of AI and system deployment, eager to
            learn new technologies and apply them to solve real-world problems.
          </Typography>

          <Stack
            direction="row"
            spacing={6}
            justifyContent="flex-end"
            sx={{ my: 3 }}
          >
            <Button
              variant="text"
              href="https://github.com/walkerhsu"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 1, minWidth: "auto" }}
            >
              <GitHubIcon sx={{ fontSize: { xs: 32, sm: 48, md: 64 } }} />
            </Button>
            <Button
              variant="text"
              href="https://www.linkedin.com/in/walkerhsu/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 1, minWidth: "auto" }}
            >
              <LinkedInIcon sx={{ fontSize: { xs: 32, sm: 48, md: 64 } }} />
            </Button>
            <Button
              variant="text"
              href="mailto:walkerhsu0808@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ p: 1, minWidth: "auto" }}
            >
              <EmailIcon sx={{ fontSize: { xs: 32, sm: 48, md: 64 } }} />
            </Button>
            <Button variant="text" href={CV} sx={{ p: 1, minWidth: "auto" }}>
              <ArticleIcon sx={{ fontSize: { xs: 32, sm: 48, md: 64 } }} />
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
