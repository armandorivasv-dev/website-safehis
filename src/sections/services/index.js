import { useState } from 'react';
import { Stack, Typography, Container, Card, CardMedia, CardContent, useMediaQuery, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { DialogPatient } from './dialog-patient';
import { DialogClinic } from './dialog-clinic';
import { DialogFarm } from './dialog-farm';
import Image from 'next/image';

export const Services = () => {
  const [openDialogPatient, setOpenDialogPatient] = useState(false);
  const [openDialogClinic, setOpenDialogClinic] = useState(false);
  const [openDialogFarm, setOpenDialogFarm] = useState(false);

  const handleClickOpenDialogPatient = () => {
    setOpenDialogPatient(true);
  };

  const handleCloseDialogPatient = () => {
    setOpenDialogPatient(false);
  };

  const handleClickOpenDialogClinic = () => {
    setOpenDialogClinic(true);
  };

  const handleCloseDialogClinic = () => {
    setOpenDialogClinic(false);
  };

  const handleClickOpenDialogFarm = () => {
    setOpenDialogFarm(true);
  };

  const handleCloseDialogFarm = () => {
    setOpenDialogFarm(false);
  };

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const cardData = [
    {
      title: 'Safehis',
      subtitle: 'Paciente crítico',
      image: '/assets/images/solutions-paciente-safehis.png',
      action: handleClickOpenDialogPatient,
    },
    {
      title: 'Safehis',
      subtitle: 'Clínica',
      image: '/assets/images/solutions-clinica-safehis.png',
      action: handleClickOpenDialogClinic,
    },
    {
      title: 'Safehis',
      subtitle: 'Farmacia',
      image: '/assets/images/solutions-farmacia-safehis.png',
      action: handleClickOpenDialogFarm,
    },
  ];

  return (
    <Container
      id='services'
      maxWidth='xxl'
    >
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={8}
        >
          <Grid
            md={12}
            xs={12}
          >
            <Typography
              variant={mdUp ? 'h3' : 'h4'}
              component='span'
              textAlign='center'
              sx={{ display: 'block' }}
            >
              Safehis es una{' '}
              <mark style={{ backgroundColor: '#32f1ce', fontSize: mdUp ? '46px' : '36px', textAlign: 'center' }}>
                completa suite
              </mark>{' '}
              de soluciones clínicas, la cual incluye las distintas unidades que cada institucion de salud necesita.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          spacing={2}
          marginTop={4}
        >
          {cardData.map((card, index) => (
            <Grid
              key={index}
              md={3}
              xs={12}
            >
              <Card sx={{ minWidth: 300, padding: '40px', borderRadius: '50px' }}>
                <Image
                  src={card.image}
                  alt={card.subtitle}
                  width={300}
                  height={150}
                  layout='responsive'
                  objectFit='cover'
                  objectPosition='center'
                  sx={{ borderRadius: '30px' }}
                />
                <CardContent>
                  <Stack
                    direction='row'
                    justifyContent='center'
                  >
                    <IconButton onClick={card.action}>
                      <ArrowCircleRightIcon sx={{ fontSize: '70px', color: 'black' }} />
                    </IconButton>
                  </Stack>
                  <Typography
                    variant='h4'
                    component='div'
                    textAlign='center'
                    marginTop={4}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant='h5'
                    textAlign='center'
                  >
                    {card.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <DialogPatient
        open={openDialogPatient}
        handleClose={handleCloseDialogPatient}
      />
      <DialogClinic
        open={openDialogClinic}
        handleClose={handleCloseDialogClinic}
      />
      <DialogFarm
        open={openDialogFarm}
        handleClose={handleCloseDialogFarm}
      />
    </Container>
  );
};
