import { Card, CardContent, Grid, Typography } from '@mui/material'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const pipelineData = [
  { stage: 'Sourced', count: 42 },
  { stage: 'Screened', count: 30 },
  { stage: 'Shortlisted', count: 18 },
  { stage: 'Submitted', count: 12 }
]

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>{title}</Typography>
        <Typography variant="h5">{value}</Typography>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}><StatCard title="Open JDs" value={12} /></Grid>
      <Grid item xs={12} md={3}><StatCard title="Active Clients" value={7} /></Grid>
      <Grid item xs={12} md={3}><StatCard title="New Resumes (7d)" value={94} /></Grid>
      <Grid item xs={12} md={3}><StatCard title="Matches Found" value={36} /></Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Pipeline</Typography>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={pipelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="stage" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1a73e8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}