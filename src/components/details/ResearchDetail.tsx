import { ArrowLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { research } from "../../data/research";
import { Button, Chip, Divider, Typography, Box, Grid } from "@mui/material";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useEffect } from "react";
import { renderTimeAndVenue } from "../utils/researchUtils";

export default function ResearchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = research[Number(id)];

  if (!item) {
    return <Typography>Research not found</Typography>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.paper" }}>
      {/* Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Box sx={{ maxWidth: "1152px", mx: "auto", px: 3, py: 3 }}>
          <Button
            variant="text"
            onClick={() => navigate("/research")}
            sx={{
              textTransform: "none",
              color: "text.primary",
              gap: 1,
              ml: -1.5,
            }}
          >
            <ArrowLeft size={16} />
            Back to Research
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ maxWidth: "1152px", mx: "auto", px: 3, py: 6 }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            {item.authors && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mt: 0.5 }}
              >
                {item.authors}
              </Typography>
            )}
            {renderTimeAndVenue(item.period, item.venue)}
          </Box>

          {/* Tags */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {item.tags.map((tag) => (
              <Chip key={tag} label={tag} />
            ))}
          </Box>
        </Box>

        {/* Project Image */}
        {item.thumbnail && (
          <Box
            sx={{
              mb: 6,
              borderRadius: 2,
              overflow: "hidden",
              border: 1,
              borderColor: "divider",
              width: "60%",
              mx: "auto",
            }}
          >
            <ImageWithFallback
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-auto aspect-video object-cover"
            />
          </Box>
        )}

        {/* Overview Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Overview
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ lineHeight: 1.75 }}
          >
            {item.description}
          </Typography>
        </Box>

        {/* Quick Info Grid */}
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{
            py: 4,
            borderTop: 1,
            borderBottom: 1,
            borderColor: "divider",
            mb: 6,
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Role
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {item.role}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Client
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {item.client}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {item.duration}
            </Typography>
          </Grid>
        </Grid>

        {/* Project Details */}
        <Box sx={{ mb: 6 }}>
          {item.details.map((detail, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {detail.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.75 }}
              >
                {detail.content}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Links */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {item.links.map((link, index) => (
            <Button
              key={index}
              variant="outlined"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<link.icon size={16} />}
              sx={{ textTransform: "none" }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* Footer Spacing */}
        <Box sx={{ height: 96 }}></Box>
      </Box>
    </Box>
  );
}
