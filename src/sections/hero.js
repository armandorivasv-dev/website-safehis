import React from 'react';
import { Box, Stack, Typography, Container, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  return (
    <Container maxWidth='xxl'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: mdUp ? '30vh' : '20vh',
            paddingBottom: '20vh',
          }}
        >
          <Stack
            direction='column'
            justifyContent='flex-end'
            alignItems='flex-start'
            spacing={2}
          >
            <Box sx={{ width: mdUp ? '80%' : '100%' }}>
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                textAlign='left'
                component='span'
              >
                Somos una empresa creada con el fin de{' '}
              </Typography>
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                textAlign='left'
                component='span'
                sx={{ backgroundColor: 'primary.main' }}
              >
                innovar constantemente
              </Typography>
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                textAlign='left'
                component='span'
              >
                {' '}
                en el area de la salud
              </Typography>
            </Box>

            <Box sx={{ width: mdUp ? '50%' : '80%' }}>
              <Typography
                variant={mdUp ? 'h5' : 'h6'}
                color='black'
                textAlign='left'
              >
                Nuestras soluciones se enfocan en mejorar la inteligencia de los procesos clínicos, particularmente en
                escenarios complejos como las UCI.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Stack
          direction='row'
          justifyContent='center'
          onClick={handleScroll}
          style={{ cursor: 'pointer' }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: '80px' }} />
        </Stack>
      </Container>
    </Container>
  );
};
