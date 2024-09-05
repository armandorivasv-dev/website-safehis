import {
  Box,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const dataNews = [
  {
    id: 0,
    age: '2013',
    news: [
      'ExpoHospital 2013, con gran éxito. Santiago.',
      'Realizó Curso de Interoperabilidad entre Sistemas de Salud en Heilderberg Center (requerido por Minsal para SIDRA 2.0), Julio 2013. Santiago.',
      'En septiembre 2013, expone en Curso de Farmacia Clínica dictado en Centro Extensión de la Universidad Católica. Santiago.',
      'En diciembre 2013, participa en Congreso de Farmacia Asistencial realizado en Concepción.',
      'En Diciembre 2013, expone en Seminario de Fármaco Economía y Fármaco Vigilancia realizado en Coquimbo.',
    ],
    image: '/assets/images/about-us-safehis-farmacia.png',
  },
  {
    id: 1,
    age: '2014',
    news: [
      'ExpoHospital 2014, en conjunto con Vademecum.',
      'Expuso como Docente en I Jornada Internacional de Farmacia Hospitalaria realizado en Antofagasta. Septiembre 2014.',
      'Participó en Conectathon FHIR de Latinoamérica en Buenos Aires, Argentina. Logrando máximo nivel. Congreso Argentino de Informática y Salud (CAIS 2014), Septiembre 2014.',
      'Octubre 2014, Emprender en Tiempos Difíciles en Universidad Santo Tomás, expositor.',
      'X Congreso Internacional de Emprendedores, realizado por Universidad La Serena, realizó Workshop Design Thinking. Noviembre 2014.',
      'En Viña del Mar, Noviembre 2014, Workshop Design Thinking. Valparaiso Sustenaibility Jam.',
      'Safehis fue seleccionada paor Start-Up Chile, generación 10, 2014. (Apoyada por Corfo).',
    ],
    image: '/assets/images/about-us-safehis-farmacia.png',
  },
];

export const DialogNews = (props) => {
  const { open, handleClose } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='lg'
      fullWidth={true}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
    >
      <Box sx={{ backgroundColor: 'background.default' }}>
        <DialogTitle id='dialog-title'></DialogTitle>
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            backgroundColor: 'primary.main',
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid
            container
            spacing={4}
          >
            <Grid xs={12}>
              <Typography
                variant={mdUp ? 'h3' : 'h4'}
                textAlign='left'
                color='black'
                component='span'
              >
                Safehis en Chile y la región:
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            padding={4}
            marginTop={4}
            sx={{ backgroundColor: 'primary.main' }}
          >
            <Grid
              md={8}
              xs={12}
            >
              <Box id='dialog-description'>
                <Typography
                  variant={mdUp ? 'h3' : 'h4'}
                  textAlign='left'
                  color='black'
                  component='span'
                  padding={1}
                >
                  {dataNews[0].age}
                </Typography>

                {dataNews[0].news.map((item, index) => (
                  <Typography
                    key={index}
                    variant={mdUp ? 'h5' : 'h6'}
                    color='black'
                    textAlign='left'
                    marginTop={2}
                    paddingLeft={mdUp ? 2 : 0}
                    lineHeight={2}
                  >
                    • {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid
              md={4}
              xs={12}
              marginTop={mdUp ? 12 : 0}
            >
              <Image
                src={dataNews[0].image}
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
          <Grid
            container
            spacing={4}
            padding={4}
            marginTop={4}
          >
            <Grid
              md={8}
              xs={12}
            >
              <Box id='dialog-description'>
                <Typography
                  variant={mdUp ? 'h3' : 'h4'}
                  textAlign='left'
                  color='black'
                  component='span'
                  backgroundColor='primary.main'
                  padding={1}
                >
                  {dataNews[1].age}
                </Typography>

                {dataNews[1].news.map((item, index) => (
                  <Typography
                    key={index}
                    variant={mdUp ? 'h5' : 'h6'}
                    color='black'
                    textAlign='left'
                    marginTop={2}
                    paddingLeft={mdUp ? 2 : 0}
                    lineHeight={2}
                  >
                    • {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid
              md={4}
              xs={12}
              marginTop={mdUp ? 12 : 0}
            >
              <Image
                src={'/assets/images/about-us-safehis-farmacia.png'}
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
        </DialogContent>
        <Stack
          direction='row'
          justifyContent='center'
          marginBottom={2}
        >
          <Button
            onClick={handleClose}
            variant='contained'
          >
            Cerrar
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};
