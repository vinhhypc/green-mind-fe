import { ModeToggle } from '@/components/customs/mode-toggle';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ModeToggle />
      <div className="h-[2000px]">
        <p>Hello</p>
      </div>
    </>
  );
}
