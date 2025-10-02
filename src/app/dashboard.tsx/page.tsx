// app/dashboard/page.tsx
"use client"; // because we are using useEffect

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js router
import { Shield, Activity, AlertTriangle, CheckCircle2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login"); // redirect to login if not authenticated
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">QVulScanner Dashboard</span>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Security Overview</h1>
          <p className="text-muted-foreground">Monitor your infrastructure's security posture</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-success/30 bg-card/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Secure Assets</CardTitle>
              <CheckCircle2 className="h-5 w-5 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">127</div>
              <p className="text-xs text-muted-foreground mt-1">+12 from last scan</p>
            </CardContent>
          </Card>

          <Card className="border-warning/30 bg-card/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Warnings</CardTitle>
              <AlertTriangle className="h-5 w-5 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning">23</div>
              <p className="text-xs text-muted-foreground mt-1">-5 from last scan</p>
            </CardContent>
          </Card>

          <Card className="border-critical/30 bg-card/80 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
              <Activity className="h-5 w-5 text-critical" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-critical">3</div>
              <p className="text-xs text-muted-foreground mt-1">Requires immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/30 bg-gradient-cyber">
          <CardHeader>
            <CardTitle>Welcome to Your Dashboard</CardTitle>
            <CardDescription>Your security command center is ready</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              This is a protected dashboard page. Start your first vulnerability scan to see detailed security insights.
            </p>
            <Button variant="cyber">
              <Shield className="mr-2" />
              Start New Scan
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
