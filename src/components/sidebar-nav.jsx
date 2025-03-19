'use client';

import { motion } from 'motion/react';
import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function MainSidebarNav({ items }) {
  const pathname = usePathname();

  return items.length ? (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-semibold">
            {item.title}{' '}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-normal leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </h4>
          {item?.items?.length && <MainSidebarNavItems items={item.items} pathname={pathname} />}
        </div>
      ))}
    </div>
  ) : null;
}

export function MainSidebarNavItems({ items, pathname }) {
  return items?.length ? (
    <div className="relative grid grid-flow-row auto-rows-max gap-0.5 text-sm">
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'group relative flex h-8 w-full items-center rounded-lg px-2 font-normal text-foreground underline-offset-2 hover:bg-accent hover:text-accent-foreground',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href && 'bg-accent font-medium text-accent-foreground'
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {pathname === item.href && (
              <motion.div
                layoutId="sidebar-nav-active"
                className="absolute inset-0 rounded-lg bg-accent text-accent-foreground"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 350,
                  damping: 30,
                  mass: 1,
                  velocity: 200,
                }}
              />
            )}
            <span className="relative z-10 shrink-0">{item.title}</span>
            {item.label && (
              <span className="relative z-10 ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item.paid && (
              <span className="relative z-10 ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                Pro
              </span>
            )}
            {item.external && <ExternalLinkIcon className="relative z-10 ml-2 size-4" />}
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground',
              item.disabled && 'cursor-not-allowed opacity-60'
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item.paid && (
              <span className="ml-2 rounded-md bg-[#4ade80] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                Pro
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}
