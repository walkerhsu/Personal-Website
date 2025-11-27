import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Grid,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { Calendar } from "lucide-react";
import { getIconForTag } from "../../utils/iconMapper";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ mb: 8, scrollMarginTop: "100px" }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WorkIcon /> Projects
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Research and development work
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ py: 1 }}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12 }} key={index}>
            <Link to={`/project/${index}`} style={{ textDecoration: "none" }}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                }}
              >
                {project.thumbnail && (
                  <Box
                    sx={{
                      width: { xs: "100%", sm: 300 },
                      minWidth: { sm: 300 },
                      height: { xs: "auto", sm: "auto" },
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </Box>
                )}
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{ lineHeight: 1.2, mb: 0.5 }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        component="div"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.secondary",
                            mt: 0.5,
                            mb: 0.5,
                          }}
                        >
                          <Calendar size={16} />
                          <Typography variant="body2">
                            {project.period}
                          </Typography>
                        </Box>
                        {project.award && (
                          <Typography
                            variant="body2"
                            sx={{ color: "warning.main", lineHeight: 1.2 }}
                          >
                            &#x2022; {project.award}
                          </Typography>
                        )}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        flexWrap: "wrap",
                        gap: 1,
                        "& > :not(style) ~ :not(style)": { ml: 0 },
                      }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          icon={getIconForTag(tag) || undefined}
                        />
                      ))}
                    </Stack>

                    {project.links?.length > 0 && (
                      <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        flexWrap="wrap"
                        sx={{ mt: 2 }}
                      >
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outlined"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<link.icon size={16} />}
                            sx={{ textTransform: "none" }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.label}
                          </Button>
                        ))}
                      </Stack>
                    )}
                  </CardContent>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
