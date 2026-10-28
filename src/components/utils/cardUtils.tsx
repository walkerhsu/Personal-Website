import { Box, Typography } from "@mui/material";
import { ArrowRight } from "lucide-react";

// Card that reacts on hover/focus; pair with stretchedLinkSx on the title link
// so the whole card is clickable without nesting other links inside an <a>.
export const clickableCardSx = {
  position: "relative",
  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
  "&:hover, &:focus-within": {
    borderColor: "primary.main",
    boxShadow: 4,
    transform: "translateY(-2px)",
  },
} as const;

export const stretchedLinkSx = {
  color: "inherit",
  textDecoration: "none",
  "&::after": { content: '""', position: "absolute", inset: 0, zIndex: 0 },
  "&:focus-visible": { outline: "none" },
} as const;

// Buttons inside a stretched-link card must sit above the link overlay
export const aboveStretchedLinkSx = {
  position: "relative",
  zIndex: 1,
} as const;

export function renderViewDetails(label = "View details") {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        color: "primary.main",
        mt: 2,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "medium" }}>
        {label}
      </Typography>
      <ArrowRight size={16} />
    </Box>
  );
}
