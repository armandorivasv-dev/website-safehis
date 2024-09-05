import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { DialogNews } from '@/sections/dialog-news';

function TopNav() {
  const [open, setOpen] = useState(false);

  const [openContactForm, setOpenContactForm] = useState(false);
  const handleOpenContactForm = () => setOpenContactForm(true);
  const handleCloseContactForm = () => setOpenContactForm(false);

  const [openDialogNews, setOpenDialogNews] = useState(false);
  const handleOpenDialogNews = () => setOpenDialogNews(true);
  const handleCloseDialogNews = () => setOpenDialogNews(false);

  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar
        position='fixed'
        sx={(theme) => ({
          boxShadow: 0,
          bgcolor: 'white',
          backgroundImage: 'none',
          width: '100%',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(24px)',
          boxShadow:
            theme.palette.mode === 'light'
              ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
              : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
        })}
      >
        <Toolbar
          variant='regular'
          sx={(theme) => ({
            maxHeight: 100,
          })}
        >
          <Container
            maxWidth='lg'
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0, gap: 4 }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
              }}
            >
              <Image
                src={'/assets/logos/safehis_logo.jpg'}
                alt='logo of safehis'
                priority={true}
                width={mdUp ? 190 : 110}
                height={mdUp ? 90 : 60}
              />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem
                onClick={() => scrollToSection('services')}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography
                  variant='h6'
                  color='text.primary'
                >
                  Nuestros Servicios
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleOpenContactForm}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography
                  variant='h6'
                  color='text.primary'
                >
                  Formulario de Contacto
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleOpenDialogNews}
                sx={{ py: '6px', px: '12px' }}
              >
                <Typography
                  variant='h6'
                  color='text.primary'
                >
                  Noticias
                </Typography>
              </MenuItem>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
              }}
            >
              <Stack
                direction='row'
                justifyContent='left'
                spacing={1}
                useFlexGap
                sx={{
                  color: 'text.secondary',
                }}
              >
                <Link href={'#'}>
                  <LinkedInIcon sx={{ color: '#000', fontSize: 45 }} />
                </Link>

                <Link href={'#'}>
                  <InstagramIcon sx={{ color: '#000', fontSize: 45 }} />
                </Link>
              </Stack>
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant='text'
                color='primary'
                aria-label='menu'
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon sx={{ fontSize: 35 }} />
              </Button>
              <Drawer
                anchor='right'
                open={open}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <MenuItem onClick={() => scrollToSection('services')}>Nuestros Servicios</MenuItem>
                  <MenuItem onClick={handleOpenContactForm}>Formulario Contacto</MenuItem>
                  <MenuItem onClick={handleOpenDialogNews}>Noticias</MenuItem>
                  <Divider />

                  <Stack
                    direction='row'
                    justifyContent='center'
                    spacing={4}
                    useFlexGap
                    sx={{
                      color: 'text.secondary',
                    }}
                  >
                    <Link href={'#'}>
                      <LinkedInIcon sx={{ color: '#000', fontSize: 40 }} />
                    </Link>

                    <Link href={'#'}>
                      <InstagramIcon sx={{ color: '#000', fontSize: 40 }} />
                    </Link>
                  </Stack>
                </Box>
              </Drawer>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <ContactForm
        open={openContactForm}
        handleClose={handleCloseContactForm}
      />
      <DialogNews
        open={openDialogNews}
        handleClose={handleCloseDialogNews}
      />
    </>
  );
}

export default TopNav;
