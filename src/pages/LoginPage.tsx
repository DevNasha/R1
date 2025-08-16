import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate, useLocation } from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const location = useLocation() as any

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock auth
    if (email && password) {
      localStorage.setItem('rs_auth_token', 'mock-token')
      const to = location.state?.from?.pathname || '/dashboard'
      navigate(to, { replace: true })
    }
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', bgcolor: 'background.default' }}>
      <Card sx={{ width: 380 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Recruitment Suite</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Sign in to continue
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 2, display: 'grid', gap: 2 }}>
            <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
            <TextField
              label="Password"
              type={show ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShow((s) => !s)} edge="end">
                      {show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button type="submit" variant="contained" size="large">Sign In</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}