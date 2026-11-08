import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground mt-1">Feel free to reach out to me.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Mail className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Email</CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:nbrines@gbox.ncf.edu.ph" className="text-sm text-muted-foreground hover:underline break-all">
              nbrines@gbox.ncf.edu.ph
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Phone className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">09167375402</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Naga City, Philippines</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}