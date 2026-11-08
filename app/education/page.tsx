import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">Academic background and formal training.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1 flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">BS in Computer Science</CardTitle>
              <p className="text-sm text-muted-foreground">Naga College Foundation</p>
            </div>
            <span className="text-sm font-medium text-muted-foreground">2nd Year Student</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 pt-2">
          <p className="text-sm text-muted-foreground">
            Currently pursuing an undergraduate degree focusing on software engineering, web application development, database design, and computer science fundamentals.
          </p>
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Highlights</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Object-Oriented Programming & Data Structures</li>
              <li>Backend Web Development & Database Engineering</li>
              <li>Modern Web UI Deployment with Next.js & TypeScript</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}