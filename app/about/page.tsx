import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to my portfolio! I am a passionate developer focused on building modern, efficient, and user-friendly web applications.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "JavaScript", "HTML/CSS"].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button asChild>
          <a href="/contact">Get in Touch</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </a>
        </Button>
      </div>
    </div>
  )
}