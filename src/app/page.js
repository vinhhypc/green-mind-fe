import { ModeToggle } from '@/components/customs/button-theme';
import { MarqueeDemo } from '@/components/customs/customer-review';

export default function Home() {
  return (
    <div className="flex flex-col gap-48">
      <ModeToggle />
      <MarqueeDemo />
    </div>
  );
}
