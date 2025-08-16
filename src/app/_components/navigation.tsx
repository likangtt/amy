"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "classnames";

export function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/buying-guide", label: "Buying Guide" },
    { href: "/usage-guide", label: "Usage Guide" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || 
                        (item.href !== "/" && pathname?.startsWith(item.href));
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm md:text-base font-medium transition-colors",
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:text-teal-600"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
