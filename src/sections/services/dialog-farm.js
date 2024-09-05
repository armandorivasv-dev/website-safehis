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

export const DialogFarm = (props) => {
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
                  Safehis Farmacia
                </Typography>

                <Typography
                  variant={mdUp ? 'h5' : 'h6'}
                  color='black'
                  textAlign='left'
                  marginTop={4}
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
                  • Prescripción electrónica de farmacia.<br></br>• Validación farmacéutica.<br></br>• Dispensación
                  manual y automática.<br></br>
                </Typography>
              </Box>
            </Grid>
            <Grid
              md={4}
              xs={12}
              marginTop={mdUp ? 6 : 0}
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
