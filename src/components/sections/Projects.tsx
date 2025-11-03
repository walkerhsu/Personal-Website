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
          <Grid item size={{ xs: 12, sm: 6 }} key={index}>
            <Link to={`/project/${index}`} style={{ textDecoration: "none" }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.secondary",
                            mt: 1,
                            mb: 1,
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
                            sx={{ color: "warning.main" }}
                          >
                            &#x2022; {project.award}
                          </Typography>
                        )}
                        {/* {renderTimeAndAward(project.period, project.award)} */}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      mb: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                      mb: 1,
                    }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} size="small" />
                    ))}
                  </Stack>

                  {project.links?.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
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
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
