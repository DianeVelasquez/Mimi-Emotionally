import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from '@mui/material';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { NavLink, Outlet } from 'react-router';
import { useLanguage } from '../../i18n/LanguageContext';

const navButtonStyles = {
  color: 'text.primary',
  fontWeight: 600,
  '&.active': {
    color: 'primary.main',
    bgcolor: 'primary.light',
  },
};

export default function AppLayout() {
  const { language, setLanguage, copy } = useLanguage();

  const navItems = [
    { label: copy.layout.nav.home, to: '/' },
    { label: copy.layout.nav.analyze, to: '/analyze' },
    { label: copy.layout.nav.about, to: '/about' },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#fff8fb',
        backgroundImage:
          'radial-gradient(circle at top, rgba(244, 114, 182, 0.12), transparent 28%), radial-gradient(circle at 85% 10%, rgba(168, 85, 247, 0.12), transparent 18%), linear-gradient(180deg, rgba(255,249,251,1) 0%, rgba(248,241,255,1) 48%, rgba(239,246,255,1) 100%)',
      }}
    >
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(42, 53, 71, 0.08)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between', gap: 2, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 3,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                  color: 'white',
                  boxShadow: '0 18px 30px rgba(168, 85, 247, 0.24)',
                }}
              >
                <GraphicEqRoundedIcon />
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={700} lineHeight={1}>
                  Mimi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {copy.common.brandTagline}
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button key={item.to} component={NavLink} to={item.to} sx={navButtonStyles}>
                  {item.label}
                </Button>
              ))}

              <Button component={NavLink} to="/analyze" variant="contained" sx={{ ml: 1 }}>
                {copy.layout.cta}
              </Button>
            </Stack>

            <Stack direction="row" spacing={1.25} alignItems="center" sx={{ ml: { xs: 0, md: 'auto' } }}>
              <Stack
                direction="row"
                spacing={0.75}
                alignItems="center"
                sx={{
                  px: 1.2,
                  py: 0.8,
                  borderRadius: 999,
                  bgcolor: 'rgba(255,255,255,0.62)',
                  border: '1px solid rgba(42, 53, 71, 0.08)',
                }}
              >
                <TranslateRoundedIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                <Typography variant="body2" fontWeight={700} sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {copy.languageLabel}
                </Typography>
                <ToggleButtonGroup
                  exclusive
                  size="small"
                  value={language}
                  onChange={(_, value) => {
                    if (value) setLanguage(value);
                  }}
                  sx={{
                    '& .MuiToggleButton-root': {
                      px: 1.2,
                      py: 0.5,
                      border: 0,
                      borderRadius: 999,
                      fontWeight: 700,
                      color: 'text.secondary',
                    },
                    '& .Mui-selected': {
                      bgcolor: 'primary.main !important',
                      color: 'white !important',
                      boxShadow: '0 12px 24px rgba(30, 77, 183, 0.22)',
                    },
                  }}
                >
                  <ToggleButton value="es">{copy.languages.es}</ToggleButton>
                  <ToggleButton value="en">{copy.languages.en}</ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Outlet />
      </Box>

      <Container maxWidth="lg" sx={{ pb: 5, pt: 2 }}>
        <Divider sx={{ mb: 3, opacity: 0.6 }} />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Stack spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              {copy.layout.footerLead}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {copy.layout.footerSupport}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1.5} alignItems="center">
            <Chip label={copy.layout.footerChip} color="primary" variant="outlined" />
            <Avatar sx={{ width: 34, height: 34, bgcolor: 'primary.main', fontSize: 14 }}>M</Avatar>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
