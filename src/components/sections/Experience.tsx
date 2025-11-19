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
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link } from "react-router-dom";
import { experiences } from "../../data/experiences";
import { renderJobTitle, renderTime } from "../utils/experienceUtils";

export default function Experience() {
  return (
    <Box
      id="experience"
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
          <WorkHistoryIcon /> Work Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Professional experience and employment history
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ py: 1 }}>
        {experiences.map((exp, index) => (
          <Grid size={{ xs: 12, sm: 6 }} key={index}>
            <Link
              to={`/experience/${index}`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3">
                        {exp.client}
                      </Typography>
                      {renderJobTitle(exp.title)}
                      {renderTime(exp.period)}
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
                    {exp.description}
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
                    {exp.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} size="small" />
                    ))}
                  </Stack>

                  {exp.links && exp.links.length > 0 && (
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mt: 2 }}
                    >
                      {exp.links.map((link, linkIndex) => (
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
