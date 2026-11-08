import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">Get to know more about my background and technical stack.</p>
      </div>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Hi! I&apos;m <span className="font-semibold text-foreground">Nathan Y. Briñes</span>, a 2nd year Computer Science student at Naga College Foundation in Naga City, Philippines.
        </p>
        <p>
          I focus on building functional web applications, learning modern backend frameworks, and exploring clean UI designs with React and Next.js.
        </p>
      </div>

      <div className="space-y-3 pt-4">
        <h2 className="text-xl font-semibold tracking-tight">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">C++</Badge>
          <Badge variant="secondary">JavaScript / TypeScript</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Node.js / NestJS</Badge>
          <Badge variant="secondary">MySQL</Badge>
          <Badge variant="secondary">Tailwind CSS</Badge>
          <Badge variant="secondary">Git / GitHub</Badge>
        </div>
      </div>
    </div>
  )
}