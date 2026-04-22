import { Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';

export default function NotFoundPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 16 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="overline" color="primary.main">
          404
        </Typography>
        <Typography variant="h2">This page does not exist in the new product flow.</Typography>
        <Typography color="text.secondary">
          We removed most of the old template routes so Mimi can focus on the actual emotional audio
          experience.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">
          Back to home
        </Button>
      </Stack>
    </Container>
  );
}
