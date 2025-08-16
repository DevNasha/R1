import { useState } from 'react'
import {
  Box, Button, Card, CardContent, Chip, IconButton, Stack, TextField, Typography
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

type JD = {
  id: string
  title: string
  client: string
  status: 'Open' | 'Closed'
  createdBy: string
  createdAt: string
  team: string[]
}

const mockJDs: JD[] = [
  { id: '1', title: 'Senior React Developer', client: 'Acme Corp', status: 'Open', createdBy: 'Nasha', createdAt: '2025-08-01', team: ['Person 1', 'Person 2'] },
  { id: '2', title: 'Data Engineer', client: 'Globex', status: 'Open', createdBy: 'Sam', createdAt: '2025-08-03', team: ['Person 3'] }
]

export default function JDsListPage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const filtered = mockJDs.filter(jd => jd.title.toLowerCase().includes(query.toLowerCase()) || jd.client.toLowerCase().includes(query.toLowerCase()))

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Job Descriptions</Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => navigate('/jds/new')}>
          New JD
        </Button>
      </Stack>

      <TextField
        placeholder="Search by title or client"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{ startAdornment: <IconButton><SearchIcon /></IconButton> }}
      />

      <Box sx={{ display: 'grid', gap: 1 }}>
        {filtered.map(jd => (
          <Card key={jd.id}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="subtitle1">{jd.title}</Typography>
                <Typography variant="body2" color="text.secondary">{jd.client} • Created by {jd.createdBy} on {jd.createdAt}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  {jd.team.map(m => <Chip key={m} label={m} size="small" />)}
                </Stack>
              </Box>
              <Chip label={jd.status} color={jd.status === 'Open' ? 'success' : 'default'} />
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}