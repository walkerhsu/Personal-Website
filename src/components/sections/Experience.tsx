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
import { getIconForTag } from "../../utils/iconMapper";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  aboveStretchedLinkSx,
  clickableCardSx,
  renderViewDetails,
  stretchedLinkSx,
} from "../utils/cardUtils";

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
        {experiences.map((exp) => (
          <Grid size={{ xs: 12 }} key={exp.id}>
            <Card
              variant="outlined"
              sx={{
                ...clickableCardSx,
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {exp.thumbnail && (
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
                    src={exp.thumbnail}
                    alt={exp.client}
                    className="w-full h-full object-cover"
                  />
                </Box>
              )}
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ lineHeight: 1.2, mb: 0.5 }}
                    >
                      <Box
                        component={Link}
                        to={`/experience/${exp.id}`}
                        sx={stretchedLinkSx}
                      >
                        {exp.client}
                      </Box>
                    </Typography>
                    {renderJobTitle(exp.title)}
                    {renderTime(exp.period)}
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
                    {exp.description}
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
                    {exp.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        icon={getIconForTag(tag) || undefined}
                      />
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
                          sx={{
                            textTransform: "none",
                            ...aboveStretchedLinkSx,
                          }}
                        >
                          {link.label}
                        </Button>
                      ))}
                    </Stack>
                  )}

                  {renderViewDetails()}
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
