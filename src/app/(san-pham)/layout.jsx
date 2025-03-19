import { SiteHeader } from '@/components/site-header';

export default function Layout({ children }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
