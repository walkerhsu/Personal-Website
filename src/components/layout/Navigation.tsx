import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
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
import { Link } from "react-router-dom";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    {
      id: "projects",
      label: "Projects",
      icon: <WorkIcon />,
      path: "/projects",
    },
    {
      id: "research",
      label: "Research",
      icon: <ScienceIcon />,
      path: "/research",
    },
    {
      id: "experience",
      label: "Experience",
      icon: <WorkHistoryIcon />,
      path: "/experience",
    },
    {
      id: "awards",
      label: "Awards",
      icon: <EmojiEventsIcon />,
      path: "/awards",
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ width: 250, pt: 3 }}>
      {navItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
          color: "text.primary",
          boxShadow: 1,
          height: "64px",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textAlign: "left",
              textDecoration: "none",
              color: "inherit",
              "&:hover": { color: "primary.main" },
            }}
            onClick={scrollToTop}
          >
            Ching-Yu, Hsu
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{ color: "text.primary" }}
                >
                  {item.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
