import Head from 'next/head';
import { Hero } from '@/sections/hero';

import { Features } from '@/sections/features';
import { Services } from '@/sections/services';
import { Partners } from '@/sections/partners';
import { AboutUs } from '@/sections/about-us';

export default function Home() {
  return (
    <>
      <Head>
        <title>Safehis - Website </title>
        <meta
          name='description'
          content='Somos una empresa creada con el fin de innovar constantemente en el area de la salud.'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <main>
        <Hero />
        <AboutUs />
        <Features />
        <Services />
        <Partners />
      </main>
    </>
  );
}
