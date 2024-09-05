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

export const DialogPatient = (props) => {
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
          //color='primary.main'
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
                  sx={{ backgroundColor: 'primary.main' }}
                >
                  Safehis Paciente Crítico
                </Typography>
                <Typography
                  variant={mdUp ? 'h5' : 'h6'}
                  color='black'
                  textAlign='left'
                  marginTop={4}
                >
                  Consiste en la solución más avanzada para unidades de cuidados intensivos.
                </Typography>

                <Typography
                  variant={mdUp ? 'h5' : 'h6'}
                  color='black'
                  textAlign='left'
                  marginTop={2}
                >
                  Esta herramienta incluye:
                </Typography>
                <Typography
                  variant={mdUp ? 'h5' : 'h6'}
                  color='black'
                  textAlign='left'
                  marginTop={2}
                  paddingLeft={2}
                  lineHeight={2}
                >
                  • Ficha y arsenal especializados de UCI.<br></br>• Prescripción electrónica protocolizada.<br></br>•
                  Farmacia clínica.<br></br>• Validación farmacéutica.<br></br>• Dispensación manual y automática.
                  <br></br>• Enfermería.<br></br>
                </Typography>
              </Box>
            </Grid>
            <Grid
              md={4}
              xs={12}
              marginTop={mdUp ? 12 : 0}
            >
              <Image
                src={'/assets/images/about-us-safehis-paciente.png'}
                width={mdUp ? 500 : 300}
                height={mdUp ? 500 : 300}
                alt='SafeHis'
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
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
