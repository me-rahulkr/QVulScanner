"use client";
import Link from 'next/link';
// We also import 'buttonVariants' to get the button's styles
import { Button, buttonVariants } from '@/components/ui/button';

export default function PublicHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          QVulScanner
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm hover:text-primary">Home</Link>
          <Link href="/about" className="text-sm hover:text-primary">About</Link>
          <Link href="/contact" className="text-sm hover:text-primary">Contact</Link>
        </nav>
        <div className="flex gap-2">
          <Link 
            href="/login" 
            className={buttonVariants({ variant: "ghost" })}
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className={buttonVariants()}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}