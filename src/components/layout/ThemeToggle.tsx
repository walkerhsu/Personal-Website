import { Switch, Stack } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import { useAppTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const theme = useTheme();
  const { toggleTheme } = useAppTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Stack direction="row" spacing={0.3} alignItems="center">
      <LightModeIcon
        sx={{ color: isDark ? "text.secondary" : "primary.main" }}
      />
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        color="default"
        size="small"
        inputProps={{ "aria-label": "toggle theme" }}
      />
      <DarkModeIcon
        sx={{ color: isDark ? "primary.main" : "text.secondary" }}
      />
    </Stack>
  );
}
