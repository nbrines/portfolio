import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, BookOpen, Music, Film } from "lucide-react"

export default function Hobbies() {
  const hobbiesList = [
    {
      title: "Gaming",
      description: "Playing tactical survival games, strategy runs, and open-world RPGs.",
      icon: Gamepad2,
    },
    {
      title: "Reading Comics",
      description: "Exploring graphic novels, manga, and serialized stories.",
      icon: BookOpen,
    },
    {
      title: "Listening to Music",
      description: "Enjoying different music genres during coding sessions and downtime.",
      icon: Music,
    },
    {
      title: "Watching Movies",
      description: "Catching up on films, cinematic series, and animated features.",
      icon: Film,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I like to do outside of coding and classes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hobbiesList.map((hobby) => {
          const Icon = hobby.icon
          return (
            <Card key={hobby.title}>
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}