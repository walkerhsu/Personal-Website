import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import backgroundImg from "/background.jpg";
import backgroundImgMobile from "/background_mobile.jpg";
import CV from "/CV.pdf";
import { projects, type Project } from "../data/projects";
import { experiences } from "../data/experiences";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  clickableCardSx,
  renderViewDetails,
  stretchedLinkSx,
} from "../components/utils/cardUtils";

const featuredProjectIds = ["eyeos", "carpg", "landsat"];
const featuredProjects = featuredProjectIds
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined);

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/walkerhsu",
    icon: <GitHubIcon />,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chingyuhsu/",
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:walkerhsu0808@gmail.com",
    icon: <EmailIcon />,
    external: false,
  },
];

function SectionHeader({
  icon,
  title,
  to,
  linkLabel,
}: {
  icon: ReactNode;
  title: string;
  to: string;
  linkLabel: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 1,
        mb: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ display: "flex", alignItems: "center", gap: 1 }}
      >
        {icon} {title}
      </Typography>
      <Button
        component={Link}
        to={to}
        endIcon={<ArrowRight size={16} />}
        sx={{ textTransform: "none" }}
      >
        {linkLabel}
      </Button>
    </Box>
  );
}

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "auto", md: "75vh" },
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          color: "text.primary",
          textAlign: "right",
          backgroundImage: {
            xs: `url(${backgroundImgMobile})`,
            sm: `url(${backgroundImg})`,
          },
          backgroundSize: "cover",
          backgroundPosition: { xs: "center", md: "center" },
          paddingTop: "40px",
          paddingBottom: "40px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark"
                ? "rgba(0, 0, 0, 0.55)"
                : "rgba(255, 255, 255, 0.55)",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", sm: "2.6rem", md: "3.5rem" },
              mb: 1,
            }}
          >
            Ching-Yu (Walker) Hsu
          </Typography>
          <Typography
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: "1.1rem", sm: "1.5rem", md: "2rem" },
              mb: 0.75,
            }}
          >
            Software Engineer
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
              mb: 0.75,
            }}
          >
            <SchoolIcon /> UC Berkeley M.Eng. EECS
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: { xs: "100%", md: "50%" },
              fontSize: { xs: "0.95rem", sm: "1.125rem", md: "1.25rem" },
              ml: "auto",
            }}
          >
            Software engineer specializing in data engineering, AI systems, and
            ML infrastructure. I build reliable products across the stack—from
            agentic applications and multimodal models to production data
            platforms.
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            flexWrap="wrap"
            spacing={1.5}
            justifyContent="flex-end"
            sx={{ my: 3 }}
          >
            <Button
              variant="contained"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{ textTransform: "none" }}
            >
              Resume
            </Button>
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                variant="outlined"
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                startIcon={link.icon}
                sx={{ textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Featured Projects */}
        <Box component="section" sx={{ mb: 8 }}>
          <SectionHeader
            icon={<WorkIcon />}
            title="Featured Projects"
            to="/projects"
            linkLabel="All projects"
          />
          <Grid container spacing={2}>
            {featuredProjects.map((project) => (
              <Grid size={{ xs: 12, md: 4 }} key={project.id}>
                <Card
                  variant="outlined"
                  sx={{
                    ...clickableCardSx,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {project.thumbnail && (
                    <Box sx={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                      <ImageWithFallback
                        src={project.thumbnail}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </Box>
                  )}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ lineHeight: 1.2, mb: 0.5 }}
                    >
                      <Box
                        component={Link}
                        to={`/project/${project.id}`}
                        sx={stretchedLinkSx}
                      >
                        {project.title}
                      </Box>
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: "text.secondary",
                        mb: 0.5,
                      }}
                    >
                      <Calendar size={16} />
                      <Typography variant="body2">{project.period}</Typography>
                    </Box>
                    {project.award && (
                      <Typography
                        variant="body2"
                        sx={{ color: "warning.main", lineHeight: 1.2, mb: 1 }}
                      >
                        &#x2022; {project.award}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </Typography>
                    {renderViewDetails("View project")}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Experience */}
        <Box component="section">
          <SectionHeader
            icon={<WorkHistoryIcon />}
            title="Experience"
            to="/experience"
            linkLabel="All experience"
          />
          <Grid container spacing={2}>
            {experiences.map((exp) => (
              <Grid size={{ xs: 12, sm: 6 }} key={exp.id}>
                <Card
                  variant="outlined"
                  sx={{ ...clickableCardSx, height: "100%" }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                      <Box
                        component={Link}
                        to={`/experience/${exp.id}`}
                        sx={stretchedLinkSx}
                      >
                        {exp.client}
                      </Box>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 0.5 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.period}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
