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

import CloseIcon from '@mui/icons-material/Close';

export const DialogAboutUs = (props) => {
  const { open, handleClose } = props;
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth='lg'
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
          <Box id='dialog-description'>
            <Typography
              variant={mdUp ? 'h3' : 'h4'}
              textAlign='left'
              color='black'
            >
              EI proyecto Asclepio nació la necesidad de los profesionales de la salud, sobretodo los pertenecientes a
              las Unidades Críticas
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={4}
            >
              Disponer de información inmediata, completa e integrada, esto con el fin de optimizar el cuidado de la
              salud del paciente en estado crítico y a mejorar la gestión de los procesos que ocurren en la unidad.
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Inicialmente el proyecto se focalizó en la informatización de la prescripción electrónica de los
              medicamentos de los pacientes de la UCI, configurándose así el "Proceso de la cadena del medicamento".
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Y ya que este proceso se relaciona a su vez con otros procesos clínicos, estos se han ido introduciendo
              poco a poco, creando así un complejo sistema de información qué es capaz de alertar sobre el estado de
              salud del paciente, registrar datos y crear estadísticas de las prestaciones, todo en tiempo real.
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Hoy en día el sistema Asclepio cuenta con varias funcionalidades tales como:
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              • Ficha clínica electrónica. <br></br>• Receta electrónica. <br></br> • Validación farmacéutica. <br></br>{' '}
              • Gestión de la dispensación de medicamentos. <br></br> • Gestión de la administración de medicamentos.{' '}
              <br></br> • Integración con otros programas informáticos hospitalarios. <br></br> • Integración con
              laboratorio. <br></br> • Monitoreo del estado actual de indicadores (Clínicos y de gestión) necesarios
              para la toma de decisiones de distintos niveles.
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Con el fin de que el desarrollo del sistema fuera acorde con las necesidades locales, el equipo que
              configuró Asclepio contó con ingenieros e informáticos biomédicos de la empresa SAFEHIS y profesionales
              pertenecientes a la UCI (Médicos, Enfermeras, Químicos Farmacéuticos, entre otros).
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Es gracias a esta alianza por 10 que actualmente el sistema Asclepio es capaz de facilitar el trabajo
              diario de los profesionales, mejorar la seguridad y calidad en la atención al paciente y hacer más
              eficiente el proceso clínico.
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              EI beneficio principal que este sistema ha conseguido es la optimización del cuidado de los pacientes de
              la UCI del hospital, ya que, según los mismos profesionales que allí trabajan, el contar con un sistema de
              registro de los parámetros críticos de los pacientes facilita el control estricto e integral de los
              mismos, permitiendo a su vez iniciar acciones preventivas o tratamiento con mayor eficacia.
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              Por otra parte tenemos también los beneficios más ligados a la gestión, entre los cuales tenemos:
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              • Mejora de la trazabilidad de las recetas médicas de la orden de exámenes y despensa de medicamentos.{' '}
              <br></br>• Disminución del tiempo de respuesta de las interconsultas. <br></br>• Reducción de la
              duplicidad de información y de los errores de transcripción en papel. <br></br>• Resguardo de aspectos
              financieros y de aseguramiento de los pacientes. <br></br>• Respuesta a requerimientos ministeriales.{' '}
              <br></br>• Optimización en la entrega de prestaciones GES. <br></br>• Mayor control y cumplimiento de
              distanciamiento oportuno de medicamentos, 10 que repercute en un mejor control de gastos en salud*.{' '}
              <br></br>
            </Typography>
            <Typography
              variant={mdUp ? 'h5' : 'h6'}
              color='black'
              textAlign='left'
              marginTop={2}
            >
              *Respecto al último punto, en una experiencia piloto de control de insumos que se pudo realizar a través
              de Asclepio, fue posible que un servicio distinto a la UCI ahorrara cerca de 400 millones de pesos en un
              año.
            </Typography>
          </Box>
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
