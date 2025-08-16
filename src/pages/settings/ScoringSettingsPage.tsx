import { Box, Button, Card, CardContent, Grid, Slider, Typography } from '@mui/material'
import { useState } from 'react'

export default function ScoringSettingsPage() {
  const [skills, setSkills] = useState(50)
  const [experience, setExperience] = useState(30)
  const [education, setEducation] = useState(20)

  const total = skills + experience + education

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h6">Scoring Weights</Typography>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom>Skills ({skills}%)</Typography>
              <Slider value={skills} onChange={(_, v) => setSkills(v as number)} step={5} min={0} max={100} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom>Experience ({experience}%)</Typography>
              <Slider value={experience} onChange={(_, v) => setExperience(v as number)} step={5} min={0} max={100} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom>Education ({education}%)</Typography>
              <Slider value={education} onChange={(_, v) => setEducation(v as number)} step={5} min={0} max={100} />
            </Grid>
            <Grid item xs={12}>
              <Typography color={total !== 100 ? 'error' : 'text.secondary'}>
                Total must be 100%. Current: {total}%
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" disabled={total !== 100}>Save Weights (mock)</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}