import { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Avatar,
  Tooltip
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DescriptionIcon from '@mui/icons-material/Description'
import BusinessIcon from '@mui/icons-material/Business'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import AssessmentIcon from '@mui/icons-material/Assessment'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import SettingsIcon from '@mui/icons-material/Settings'

const drawerWidth = 240

export default function AppLayout() {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  const navItems = [
    { to: '/dashboard', icon: <DashboardIcon />, label: 'Dashboard' },
    { to: '/jds', icon: <DescriptionIcon />, label: 'Job Descriptions' },
    { to: '/clients', icon: <BusinessIcon />, label: 'Clients' },
    { to: '/upload', icon: <CloudUploadIcon />, label: 'Resume Upload' },
    { to: '/matching', icon: <AssessmentIcon />, label: 'Matching & Scoring' },
    { to: '/formatter', icon: <FormatAlignLeftIcon />, label: 'Formatter' },
    { to: '/settings/scoring', icon: <SettingsIcon />, label: 'Settings' }
  ]

  const logout = () => {
    localStorage.removeItem('rs_auth_token')
    navigate('/login', { replace: true })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen((o) => !o)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Recruitment Suite
          </Typography>
          <Tooltip title="Sign out">
            <Avatar sx={{ bgcolor: 'secondary.main', cursor: 'pointer' }} onClick={logout}>
              RS
            </Avatar>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={NavLink}
                to={item.to}
                sx={{
                  '&.active': { bgcolor: 'action.selected' }
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}