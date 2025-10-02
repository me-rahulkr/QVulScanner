// app/about/page.tsx
import { Shield, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">QVulScanner</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering organizations with next-generation security intelligence
            </p>
          </div>

          {/* Mission Section */}
          <Card className="border-primary/30 bg-card/80 backdrop-blur">
            <CardContent className="pt-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At QVulScanner, we believe that robust cybersecurity should be accessible to organizations 
                    of all sizes. Our mission is to democratize enterprise-grade vulnerability scanning and 
                    security assessment tools, enabling teams to proactively identify and remediate security 
                    risks before they become breaches.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-card/60 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Lightning Fast</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced scanning algorithms deliver comprehensive results in minutes, 
                        not hours. Optimize your security workflow with real-time threat detection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/60 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Comprehensive Coverage</h3>
                      <p className="text-sm text-muted-foreground">
                        Detect vulnerabilities across web applications, network infrastructure, 
                        cloud environments, and APIs with a single unified platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/60 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Built for Teams</h3>
                      <p className="text-sm text-muted-foreground">
                        Collaborate seamlessly with role-based access, shared dashboards, 
                        and automated reporting for stakeholders at every level.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/60 backdrop-blur">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-info/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-info" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">Actionable Insights</h3>
                      <p className="text-sm text-muted-foreground">
                        Move beyond raw scan data with prioritized remediation guidance, 
                        exploit context, and compliance mapping for industry standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technology Stack */}
          <Card className="border-primary/30 bg-gradient-cyber">
            <CardContent className="pt-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Powered by Advanced Technology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                QVulScanner leverages machine learning, threat intelligence feeds, and CVE databases 
                to provide accurate, up-to-date vulnerability detection. Our platform continuously 
                evolves to stay ahead of emerging threats and zero-day vulnerabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
