import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl space-y-8 text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Nathan Y. Briñes
        </h1>
        <p className="text-xl text-muted-foreground">
          2nd Year BS Computer Science Student at Naga College Foundation
        </p>
      </div>

      <p className="max-w-2xl mx-auto text-muted-foreground">
        Welcome to my personal developer portfolio built with Next.js, TypeScript, and Shadcn UI.
      </p>

      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/about">About Me</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </div>
  )
}