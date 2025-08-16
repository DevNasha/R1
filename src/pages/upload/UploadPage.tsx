import { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'

export default function UploadPage() {
  const [files, setFiles] = useState<FileList | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
  }

  const onUpload = () => {
    if (!files || files.length === 0) return
    alert(`${files.length} file(s) ready for upload (mock).`)
  }

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Typography variant="h6">Resume Upload</Typography>
      <Card>
        <CardContent>
          <input type="file" multiple onChange={onChange} accept=".pdf,.doc,.docx,.txt" />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={onUpload} disabled={!files}>Upload</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}