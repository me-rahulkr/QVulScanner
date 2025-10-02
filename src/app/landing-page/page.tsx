import Image from "next/image";
import Link from "next/link";
import { Shield, Scan, Eye, Zap, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-security.jpg";
import Header from "@/components/layout/Header";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-30"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Advanced Security
                </span>
                <br />
                <span className="text-foreground">Q Vulnerability Scanner</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Detect, analyze, and remediate security vulnerabilities with cutting-edge scanning technology. 
                Protect your infrastructure with QVulScanner's comprehensive security assessments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register" passHref>
                  <Button size="lg" variant="cyber" className="text-base">
                    <Zap className="mr-2" />
                    Start Free Scan
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button size="lg" variant="outline" className="text-base">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">No Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm text-muted-foreground">Instant Setup</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <Image
                src={heroImage}
                alt="QVulScanner Dashboard Preview"
                className="relative rounded-lg border border-primary/30 shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Powerful Scanning <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right scanning mode for your security assessment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/30 bg-card/80 backdrop-blur hover:shadow-glow-primary transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Active Scanning</CardTitle>
                <CardDescription className="text-base">
                  Deep, comprehensive vulnerability detection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Intrusive testing with network probing
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Port scanning and service enumeration
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    CVE database matching and exploit detection
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Real-time threat intelligence integration
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-card/80 backdrop-blur hover:shadow-glow-accent transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Passive Scanning</CardTitle>
                <CardDescription className="text-base">
                  Non-intrusive monitoring and analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Traffic analysis without network disruption
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Configuration compliance checking
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Asset discovery and inventory management
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Zero impact on production systems
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-scan animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Lock className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Secure Your Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start scanning in minutes. No credit card required.
          </p>
          <Link href="/register" passHref>
            <Button size="lg" variant="cyber" className="text-base">
              <Shield className="mr-2" />
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
