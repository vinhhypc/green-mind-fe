'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { webConfig } from '@/config/webConfig';
import { cn } from '@/lib/utils';

function MainNav() {
  const pathname = usePathname();
  return (
    <div className="mr-4 hidden md:flex">
      <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
        {webConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.title}
            target={item.external ? '_blank' : undefined}
            className={cn(
              'flex items-center justify-center transition-colors hover:text-foreground/80',
              pathname?.startsWith(item.href) ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            <span className="shrink-0 uppercase">{item.title}</span>
            {item.label && (
              <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {/* {item.external && <ExternalLinkIcon className="ml-2 size-4" />} */}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export { MainNav };
