import { Box, Card, CardContent, Chip, LinearProgress, Stack, Typography } from '@mui/material'

const mockMatches = [
  { name: 'Alice Johnson', score: 92, highlights: ['React', 'TypeScript', '5y'] },
  { name: 'Bob Singh', score: 86, highlights: ['Node.js', 'AWS', 'Microservices'] },
  { name: 'Carol Lee', score: 78, highlights: ['Python', 'ETL', 'Airflow'] }
]

export default function MatchingPage() {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h6">Matching & Scoring</Typography>
      {mockMatches.map(m => (
        <Card key={m.name}>
          <CardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box>
                <Typography variant="subtitle1">{m.name}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                  {m.highlights.map(h => <Chip key={h} label={h} size="small" />)}
                </Stack>
              </Box>
              <Box sx={{ minWidth: 200 }}>
                <Typography variant="body2" align="right">{m.score}%</Typography>
                <LinearProgress variant="determinate" value={m.score} sx={{ height: 8, borderRadius: 1 }} />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}