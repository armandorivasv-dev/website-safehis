import { useState } from 'react';
import { Box, Typography, Container, useMediaQuery, IconButton } from '@mui/material';
import Image from 'next/image';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import { DialogAboutUs } from './dialog-about-us';
import Grid from '@mui/material/Unstable_Grid2';

export const AboutUs = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      maxWidth='xxl'
      sx={{ backgroundColor: 'primary.main' }}
    >
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: '10vh',
            minHeight: '40vh',
          }}
        >
          <Grid
            container
            spacing={8}
          >
            <Grid
              md={8}
              xs={12}
            >
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                textAlign='left'
              >
                Nuestro equipo incluye médicos, farmaeúticos, y muchos diversos profesionales de la salud y
                profesionales informáticos de primer nivel.
              </Typography>
              <Typography
                variant={mdUp ? 'h5' : 'h6'}
                color='black'
                maxWidth='70%'
                textAlign='left'
                marginTop={4}
              >
                Juntos hemos desarrollado un sistema capaz de causar un alto impacto positivo en cuanto seguridad,
                calidad, eficiencia, ahorro, control y gestión de procesos clínicos complejos, el cual ha sido llamado
                Asclepio.
                <IconButton onClick={handleClickOpen}>
                  <ArrowCircleRightIcon sx={{ fontSize: '35px', color: 'black' }} />
                </IconButton>
              </Typography>
            </Grid>
            <Grid
              md={4}
              xs={12}
            >
              <Image
                src={'/assets/images/about-us-safehis.png'}
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
          </Grid>
        </Box>
      </Container>
      <DialogAboutUs
        open={open}
        handleClose={handleClose}
      />
    </Container>
  );
};
