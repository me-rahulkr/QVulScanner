import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center bg-background pt-20 md:pt-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Vulnerability Scanner
          </h1>
          <p className="text-lg text-muted-foreground">
            Detect, analyze, and remediate security vulnerabilities with cutting-edge scanning 
            technology. Protect your infrastructure with QVulScanner's comprehensive security 
            assessments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg">Start Free Scan</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
          <div className="flex justify-center md:justify-start gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Instant Setup</span>
            </div>
          </div>
        </div>

        {/* Right Side: Image/Graphic */}
        <div className="flex items-center justify-center">
          <Image 
  src="/tech-graphic.jpg" // <-- Use the name of the new image you downloaded
  alt="Vulnerability Scanner Graphic"
  width={450}
  height={450}
  priority
/>
        </div>
      </div>
    </main>
  );
}