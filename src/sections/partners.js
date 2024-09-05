import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

const dataPartners = [
  {
    id: 0,
    title: 'Hospital del Salvador',
    src: '/assets/logos/partners/salvador.png',
  },
  {
    id: 1,
    title: 'Ministerio de Salud',
    src: '/assets/logos/partners/minsalud.png',
  },
  {
    id: 2,
    title: 'Hospital de Puerto',
    src: '/assets/logos/partners/puerto.png',
  },
  {
    id: 3,
    title: 'Hospital Clinico Magallanes',
    src: '/assets/logos/partners/magallanes.png',
  },
  {
    id: 4,
    title: 'Hospital Regional de Copiapo',
    src: '/assets/logos/partners/san-jose-del-carmen.png',
  },
  {
    id: 5,
    title: 'Grifols',
    src: '/assets/logos/partners/grifols.png',
  },
  {
    id: 6,
    title: 'StartUp Chile',
    src: '/assets/logos/partners/startupchile.png',
  },
  {
    id: 7,
    title: 'Corfo',
    src: '/assets/logos/partners/corfo.png',
  },
  {
    id: 8,
    title: 'Corfo',
    src: '/assets/logos/partners/corfo.png',
  },
  {
    id: 9,
    title: 'ProChile',
    src: '/assets/logos/partners/prochile.png',
  },
  {
    id: 10,
    title: 'Cens',
    src: '/assets/logos/partners/cens.png',
  },
  {
    id: 11,
    title: 'hl7',
    src: '/assets/logos/partners/hl7.png',
  },
  {
    id: 12,
    title: 'Sociedad Chilena de Medicina Intensiva',
    src: '/assets/logos/partners/scmi.png',
  },
  {
    id: 13,
    title: 'ACTI',
    src: '/assets/logos/partners/acti.png',
  },
  {
    id: 14,
    title: 'VIDEL GROUP',
    src: '/assets/logos/partners/vidal-group.png',
  },
];

export const Partners = () => {
  return (
    <Container maxWidth='xxl'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: '5vh',
            minHeight: '40vh',
            backgroundSize: 'cover',
          }}
        >
          <Grid
            container
            spacing={8}
          >
            <Grid
              md={12}
              xs={12}
            >
              <Typography
                variant='h4'
                component='span'
                textAlign='left'
                sx={{ display: 'block' }}
              >
                CLIENTES - GOBIERNO - SOCIOS
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction='row'
            spacing={8}
            paddingTop={4}
          >
            {dataPartners.map((item) => (
              <Grid
                key={item.id}
                md={3}
                xs={6}
              >
                <Image
                  src={item.src}
                  width={100}
                  height={100}
                  alt='SafeHis'
                  priority={true}
                  sizes='100vw'
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};
