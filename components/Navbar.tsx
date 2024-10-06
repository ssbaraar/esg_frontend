"use client"

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ESG Helper
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/product" className="hover:text-primary transition-colors">
            Product
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;