import { useState, useCallback } from 'react';
import { Box, Stack, Typography, Container, Tab, Tabs, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

const optionTabsData = [
  {
    title: 'Coordina',
    value: 'coordina',
    description:
      'Coordina y controla el ciclo farmacoterapéutico desde la generación de la prescripción electrónica. validación farmacéutica. dispensación y administración cie los medicamentos, tanto manual como automático.',
    image: '/assets/images/about-us-safehis.png',
  },
  {
    title: 'Agiliza',
    value: 'agiliza',
    description:
      'Agiliza y controla el ciclo farmacoterapéutico desde la generación de la prescripción electrónica. validación farmacéutica. dispensación y administración cie los medicamentos, tanto manual como automático.',
    image: '/assets/images/about-us-safehis.png',
  },
  {
    title: 'Permite',
    value: 'permite',
    description:
      'Permite y controla el ciclo farmacoterapéutico desde la generación de la prescripción electrónica. validación farmacéutica. dispensación y administración cie los medicamentos, tanto manual como automático.',
    image: '/assets/images/about-us-safehis.png',
  },
];

export const Features = () => {
  const [value, setValue] = useState(0);
  const [currentTab, setCurrentTab] = useState('coordina');

  const handleTabsChange = useCallback((event, tab) => {
    setCurrentTab(tab);
  }, []);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth='xxl'
      id='features'
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
              md={12}
              xs={12}
            >
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                component='span'
                textAlign='center'
                sx={{ display: 'block' }}
              >
                <mark style={{ backgroundColor: '#32f1ce', fontSize: mdUp ? '46px' : '36px', textAlign: 'center' }}>
                  Safehis-Asclepio
                </mark>{' '}
                facilita a los profesionales de la salud la gestión de la evolución clínica de los pacientes y optimiza
                el uso y control de recursos gracias a que:
              </Typography>
            </Grid>
            <Grid
              md={12}
              xs={12}
            >
              <Tabs
                indicatorColor='primary'
                onChange={handleTabsChange}
                scrollButtons='auto'
                value={currentTab}
                variant={mdUp ? 'fullWidth' : 'scrollable'}
                allowScrollButtonsMobile
              >
                {optionTabsData.map((tab) => (
                  <Tab
                    key={tab.value}
                    value={tab.value}
                    label={
                      <Stack
                        direction='column'
                        justifyContent='flex-start'
                        alignItems='center'
                      >
                        <Typography variant={mdUp ? 'h5' : 'h7'}>{tab.title}</Typography>
                      </Stack>
                    }
                  />
                ))}
              </Tabs>

              <Box marginTop={2}>
                {currentTab === 'coordina' && (
                  <Grid
                    container
                    spacing={8}
                  >
                    <Grid
                      md={7}
                      xs={12}
                    >
                      <Typography
                        variant={mdUp ? 'h5' : 'h6'}
                        color='black'
                        textAlign='left'
                        marginTop={8}
                      >
                        • Coordina y controla el ciclo farmacoterapéutico desde la generación de la prescripción
                        electrónica.<br></br>• validación farmacéutica.<br></br>• dispensación y administración cie los
                        medicamentos, tanto manual como automático.<br></br>
                      </Typography>
                    </Grid>
                    <Grid
                      md={5}
                      xs={12}
                    >
                      <Image
                        src={'/assets/images/features-safehis-coordina.png'}
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
                )}
                {currentTab === 'agiliza' && (
                  <Grid
                    container
                    spacing={8}
                  >
                    <Grid
                      md={7}
                      xs={12}
                    >
                      <Typography
                        variant={mdUp ? 'h5' : 'h6'}
                        color='black'
                        textAlign='left'
                        marginTop={8}
                      >
                        • Reducción del tiempo de respuesta a interconsultas. <br></br>• Optimización de la entrega de
                        prestaciones ges al mejorar la coordinación de elementos que deben estar presentes para hacer
                        efectiva la prestación.<br></br>• Mayor control y cumplimiento del dispensamiento oportuno de
                        medicamentos, lo que repercute en un mejor control del gasto en salud.<br></br>
                      </Typography>
                    </Grid>
                    <Grid
                      md={5}
                      xs={12}
                    >
                      <Image
                        src={'/assets/images/features-safehis-agiliza.png'}
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
                )}
                {currentTab === 'permite' && (
                  <Grid
                    container
                    spacing={8}
                  >
                    <Grid
                      md={7}
                      xs={12}
                    >
                      <Typography
                        variant={mdUp ? 'h5' : 'h6'}
                        color='black'
                        textAlign='left'
                        marginTop={8}
                      >
                        • Mejor trazabilidad de la receta médica, de la orden de exámenes y dispensación de
                        medicamentos. <br></br>• Mayor disponibilidad de información actualizada para dar respuesta a
                        requerimientos ministeriales.<br></br>• Reducción de la duplicidad de información y de los
                        errores de transcripción en papel.<br></br>
                      </Typography>
                    </Grid>
                    <Grid
                      md={5}
                      xs={12}
                    >
                      <Image
                        src={'/assets/images/features-safehis-permite.png'}
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
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};
