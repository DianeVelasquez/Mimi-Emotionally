import { Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFoundPage() {
  const { copy } = useLanguage();

  return (
    <Container maxWidth="sm" sx={{ py: 16 }}>
      <Stack spacing={3} alignItems="flex-start">
        <Typography variant="overline" color="primary.main">
          404
        </Typography>
        <Typography variant="h2">{copy.notFound.title}</Typography>
        <Typography color="text.secondary">{copy.notFound.description}</Typography>
        <Button component={RouterLink} to="/" variant="contained">
          {copy.notFound.action}
        </Button>
      </Stack>
    </Container>
  );
}
