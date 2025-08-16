import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'

type Client = { id: string; name: string; location: string; contact?: string }

const mockClients: Client[] = [
  { id: '1', name: 'Acme Corp', location: 'New York', contact: 'hr@acme.com' },
  { id: '2', name: 'Globex', location: 'London', contact: 'talent@globex.io' }
]

export default function ClientsListPage() {
  const [query, setQuery] = useState('')
  const filtered = mockClients.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.location.toLowerCase().includes(query.toLowerCase()))

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Clients</Typography>
        <Button variant="contained" startIcon={<AddIcon />}>New Client</Button>
      </Box>

      <TextField placeholder="Search by name or location" value={query} onChange={(e) => setQuery(e.target.value)} />

      <Grid container spacing={2}>
        {filtered.map(c => (
          <Grid item xs={12} md={6} lg={4} key={c.id}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">{c.name}</Typography>
                <Typography variant="body2" color="text.secondary">{c.location}</Typography>
                <Typography variant="body2">{c.contact}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}