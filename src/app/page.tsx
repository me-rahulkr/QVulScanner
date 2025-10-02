import Header from "@/components/layout/Header"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to QVulScanner</h1>
        <p className="text-xl text-muted-foreground">
          Start exploring your security dashboard here!
        </p>
      </div>
    </div>
  );
}
