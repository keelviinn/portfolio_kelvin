import Head from 'next/head';
import { Navigation } from '../Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Kelvin Oliveira</title>
        <meta name="description" content="Portifolio Kelvin Oliveira" />
      </Head>
      <div className='min-h-screen flex flex-col'>
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </>
  );
};