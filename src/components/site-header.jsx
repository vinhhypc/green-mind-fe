import { ModeToggle } from './customs/mode-toggle';
import { MobileNav } from '@/components/mobile-nav';
import { MainNav } from '@/components/main-nav';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header
      className={cn(
        'supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full border-b border-border bg-background/40 backdrop-blur-lg'
      )}
    >
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <nav className="flex items-center gap-1">
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
