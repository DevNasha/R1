import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'

export default function FormatterPage() {
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h6">Resume Formatter</Typography>
      <Card>
        <CardContent>
          <Typography gutterBottom>Generate company-format resume (mock)</Typography>
          <TextField multiline minRows={8} fullWidth defaultValue={`Name: Jane Doe
Summary: Experienced React Developer...
Experience:
- Company A (2020-2024) ...
- Company B (2018-2020) ...
Skills: React, TypeScript, Node.js`} />
          <Button sx={{ mt: 2 }} variant="contained">Export PDF (mock)</Button>
        </CardContent>
      </Card>
    </Box>
  )
}