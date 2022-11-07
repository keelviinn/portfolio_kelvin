import Head from 'next/head';
import { navItems } from '../../variables/navItems';
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
        <Navigation navItems={navItems} />
        <main>
          {children}
        </main>
      </div>
    </>
  );
};