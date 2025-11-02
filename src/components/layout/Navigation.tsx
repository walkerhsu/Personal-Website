import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import ScienceIcon from "@mui/icons-material/Science";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { id: "projects", label: "Projects", icon: <WorkIcon /> },
    { id: "research", label: "Research", icon: <ScienceIcon /> },
    { id: "experience", label: "Experience", icon: <WorkHistoryIcon /> },
    { id: "awards", label: "Awards", icon: <EmojiEventsIcon /> },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileOpen(false);
  };

  const drawer = (
    <List sx={{ width: 250, pt: 3 }}>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton onClick={() => handleNavClick(item.id)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          color: "text.primary",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="button"
            onClick={() => onNavigate("header")}
            sx={{
              flexGrow: 1,
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
              "&:hover": { color: "primary.main" },
            }}
          >
            Ching-Yu, Hsu
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  startIcon={item.icon}
                  onClick={() => handleNavClick(item.id)}
                  sx={{ color: "text.primary" }}
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        {drawer}
      </Drawer>
    </>
  );
}