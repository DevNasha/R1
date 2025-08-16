import { Box, Button, Card, CardContent, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  title: z.string().min(2),
  client: z.string().min(1),
  description: z.string().min(10),
  sourceTeam: z.string().min(1),
  sourcePerson: z.string().min(1),
  date: z.string().min(1),
  team: z.string().optional()
})

type FormData = z.infer<typeof schema>

export default function JDsCreatePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = (data: FormData) => {
    // For now, just log. Later: call API.
    console.log('JD Created', data)
    alert('JD saved (mock). You can wire this to backend next.')
  }

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h6">Create Job Description</Typography>
      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Title" fullWidth {...register('title')} error={!!errors.title} helperText={errors.title?.message} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Client" select fullWidth defaultValue="" {...register('client')} error={!!errors.client} helperText={errors.client?.message}>
                  <MenuItem value="Acme Corp">Acme Corp</MenuItem>
                  <MenuItem value="Globex">Globex</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Description" fullWidth multiline minRows={4} {...register('description')} error={!!errors.description} helperText={errors.description?.message} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField label="From (Team/Dept)" fullWidth {...register('sourceTeam')} error={!!errors.sourceTeam} helperText={errors.sourceTeam?.message} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField label="From (Person)" fullWidth {...register('sourcePerson')} error={!!errors.sourcePerson} helperText={errors.sourcePerson?.message} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField type="date" label="Date" fullWidth InputLabelProps={{ shrink: true }} {...register('date')} error={!!errors.date} helperText={errors.date?.message} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Assigned Team (comma-separated)" fullWidth placeholder="Person 1, Person 2" {...register('team')} />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">Save JD</Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}