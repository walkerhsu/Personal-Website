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
import { getIconForTag } from "../../utils/iconMapper";
import { ImageWithFallback } from "../figma/ImageWithFallback";

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
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.thumbnail && (
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
                      src={item.thumbnail}
                      alt={item.title}
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
                        {item.title}
                      </Typography>
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
                        <Typography variant="body2">{item.period}</Typography>
                      </Box>
                      {item.venue && (
                        <Typography
                          variant="body2"
                          sx={{ color: "warning.main", lineHeight: 1.2 }}
                        >
                          &#x2022; {item.venue}
                        </Typography>
                      )}
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
                      {item.description}
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
                      {item.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          icon={getIconForTag(tag) || undefined}
                        />
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
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
