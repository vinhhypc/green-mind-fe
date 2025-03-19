'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { webConfig } from '@/config/webConfig';
import { siteConfig } from '@/config/siteConfig';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle className="hidden">{siteConfig.name}</SheetTitle>
        <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-6rem)]">
          <div className="flex flex-col space-y-1.5">
            {webConfig.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink key={item.href} href={item.href}>
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            {webConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col gap-y-1.5 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item.items?.map((subItem) =>
                  !subItem.disabled && subItem.href ? (
                    <MobileLink
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        'text-muted-foreground',
                        subItem.disabled && 'cursor-not-allowed opacity-60'
                      )}
                    >
                      {subItem.title}
                      {subItem.label && (
                        <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                          {subItem.label}
                        </span>
                      )}
                      {subItem.paid && (
                        <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                          Pro
                        </span>
                      )}
                    </MobileLink>
                  ) : (
                    <span
                      key={index}
                      className={cn(
                        'text-muted-foreground',
                        subItem.disabled && 'cursor-not-allowed opacity-60'
                      )}
                    >
                      {subItem.title}
                      {subItem.label && (
                        <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                          {subItem.label}
                        </span>
                      )}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({ href, onClick, className, children, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={() => {
          router.push(href);
          onClick?.();
        }}
        className={cn(
          className,
          'p-1 pl-2.5 text-[15px]',
          isActive
            ? 'rounded-r-md border-l-2 border-primary/70 bg-secondary font-medium text-primary'
            : ''
        )}
        {...props}
      >
        {children}
      </Link>
    </SheetClose>
  );
}
