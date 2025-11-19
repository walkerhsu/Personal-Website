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
import ScienceIcon from "@mui/icons-material/Science";
import { Link } from "react-router-dom";
import { research } from "../../data/research";
import { Calendar } from "lucide-react";

export default function Research() {
  return (
    <Box
      id="research"
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
          <ScienceIcon /> Research
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Publications and research work
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ py: 1 }}>
        {research.map((item, index) => (
          <Grid size={{ xs: 12 }} key={index}>
            <Link
              to={`/research/${index}`}
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
                        {item.title}
                      </Typography>
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
                        <Typography variant="body2">{item.period}</Typography>
                      </Box>
                      {item.venue && (
                        <Typography
                          variant="body2"
                          sx={{ color: "warning.main" }}
                        >
                          &#x2022; {item.venue}
                        </Typography>
                      )}
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
                    {item.description}
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
                    {item.tags.map((tag, tagIndex) => (
                      <Chip key={tagIndex} label={tag} size="small" />
                    ))}
                  </Stack>

                  {item.links && item.links.length > 0 && (
                    <Stack
                      direction="row"
                      spacing={1}
                      useFlexGap
                      flexWrap="wrap"
                      sx={{ mt: 2 }}
                    >
                      {item.links.map((link, linkIndex) => (
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
