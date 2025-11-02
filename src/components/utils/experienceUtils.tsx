import { Box, Typography } from "@mui/material";
import { Calendar } from "lucide-react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export function renderJobTitle(title: string) {
  return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      mt: 1,
    }}
  >
    <PersonOutlineIcon sx={{ fontSize: 16, verticalAlign: "middle", mr: 0.5, margin: 0 }} />
    <Typography variant="body2">{title}</Typography>
  </Box>;
}

export function renderTime(period: string) {
  return <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      color: "text.secondary",
      mt: 1,
    }}
  >
    <Calendar size={16} />
    <Typography variant="body2">{period}</Typography>
  </Box>;
}