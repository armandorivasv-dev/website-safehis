import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Copyright() {
  return (
    <Typography
      textAlign='left'
      variant='body2'
      color='text.secondary'
      mt={1}
    >
      {'Copyright © '}
      Safehis {new Date().getFullYear()}
    </Typography>
  );
}

function DevelopedBy() {
  return (
    <Typography
      textAlign='left'
      variant='body2'
      color='text.secondary'
      mt={1}
    >
      {'Developed By '}
      <Link
        href='https://armandorivasv-dev.web.app/'
        target='_blank'
      >
        @armandorivasv.dev&nbsp;
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      maxWidth='xxl'
      sx={{
        backgroundColor: 'primary.main',
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 4 },
          py: { xs: 8, sm: 10 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            variant='h6'
            fontWeight={600}
          >
            Información de Contacto
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            justifyContent: 'flex-start',
            gap: { xs: 4, sm: 12 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='h6'
              fontWeight={600}
            >
              Teléfono
            </Typography>
            <Typography variant='h6'>+569 8464 6972</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='h6'
              fontWeight={600}
            >
              Email
            </Typography>
            <Typography variant='h6'>contacto@safehis.com</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography
              variant='h6'
              fontWeight={600}
            >
              Horario Laboral
            </Typography>

            <Typography variant='h6'>Lun - Vie: 9:00 - 18:00</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            pt: { xs: 4, sm: 2 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Copyright />
            <DevelopedBy />
          </div>
        </Box>
      </Container>
    </Container>
  );
}
