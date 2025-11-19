import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { awards } from "../../data/awards";

export default function Awards() {
  return (
    <Box
      id="awards"
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
          <EmojiEventsIcon /> Awards
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Recognition and honors
        </Typography>
      </Box>

      <Stack spacing={3}>
        {awards.map((award, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                <Avatar sx={{ bgcolor: award.color, mt: 0.5 }}>
                  <EmojiEventsIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {award.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {award.organization}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}
