import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";

const chapters = [
  {
    title: "Seré el rey de los piratas!",
    number: "Capítulo 12",
    status: "Pendiente",
    statusColor: "bg-gray-500",
  },
  {
    title: "El Tesoro de la Isla Fantasma",
    number: "Capítulo 27",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "La Batalla de los Mares Tempestuosos",
    number: "Capítulo 45",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "El Viaje a la Tierra de los Dragones",
    number: "Capítulo 53",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "El Secreto del Rey de los Piratas",
    number: "Capítulo 56",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "La Alianza de los Guerreros del Mar",
    number: "Capítulo 78",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "El Despertar de los Poderes Ocultos",
    number: "Capítulo 89",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "La Última Frontera de la Aventura",
    number: "Capítulo 101",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
  {
    title: "El Legado de los Antiguos Navegantes",
    number: "Capítulo 115",
    status: "Publicado",
    statusColor: "bg-status-green",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-hero-bg flex items-center justify-between px-8 md:px-16 overflow-hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h20v20H10zm30 0h20v20H40zm30 0h20v20H70zM10 40h20v20H10zm30 0h20v20H40zm30 0h20v20H70zM10 70h20v20H10zm30 0h20v20H40zm30 0h20v20H70z' fill='%23000' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      >
        {/* Manga panels pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-4 w-16 h-20 border-2 border-white/30 rounded"></div>
          <div className="absolute top-8 right-20 w-12 h-16 border-2 border-white/20 rounded"></div>
          <div className="absolute bottom-8 left-20 w-20 h-12 border-2 border-white/25 rounded"></div>
          <div className="absolute bottom-4 right-8 w-14 h-18 border-2 border-white/30 rounded"></div>
        </div>

        <div className="flex-1 max-w-lg z-10">
          <Badge className="mb-4 bg-gray-700 text-white hover:bg-gray-600 text-xs px-3 py-1 rounded-full">
            AUDIO MANGA MAYONESO
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            La experiencia del manga a otro nivel
          </h1>

          <p className="text-gray-300 text-lg mb-6 max-w-md">
            El manga de one piece con efectos de sonido y bandas sonoras.
            Descubre una nueva forma de leer la apasionante obra de Eiichiro
            Oda.
          </p>

          <Button className="bg-manga-red hover:bg-manga-red/90 text-white px-6 py-3 text-lg font-semibold rounded-lg">
            Comenzar a leer
          </Button>
        </div>

        {/* Luffy Character */}
        <div className="hidden md:block relative">
          <div className="w-48 h-48 relative">
            {/* Simplified Luffy illustration - using CSS shapes */}
            <div className="absolute bottom-0 right-0">
              {/* Hat */}
              <div className="w-24 h-16 bg-yellow-400 rounded-full absolute -top-2 left-4 border-2 border-red-600"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full absolute top-2 left-8"></div>

              {/* Face */}
              <div className="w-20 h-20 bg-orange-200 rounded-full relative">
                {/* Eyes */}
                <div className="w-3 h-3 bg-black rounded-full absolute top-6 left-4"></div>
                <div className="w-3 h-3 bg-black rounded-full absolute top-6 right-4"></div>
                {/* Mouth */}
                <div className="w-8 h-4 border-4 border-black border-t-0 rounded-b-full absolute bottom-4 left-6"></div>
                {/* Scar */}
                <div className="w-1 h-6 bg-red-600 absolute left-4 top-2"></div>
              </div>

              {/* Body */}
              <div className="w-16 h-24 bg-red-500 absolute top-16 left-2 rounded-lg"></div>

              {/* Arms */}
              <div className="w-12 h-4 bg-orange-200 rounded-full absolute top-20 -left-8 rotate-45"></div>
              <div className="w-12 h-4 bg-orange-200 rounded-full absolute top-24 right-12 -rotate-45"></div>

              {/* Fist pointing */}
              <div className="w-6 h-6 bg-orange-200 rounded-full absolute top-8 right-16"></div>

              {/* Shorts */}
              <div className="w-14 h-12 bg-blue-600 absolute top-36 left-3 rounded"></div>

              {/* Legs */}
              <div className="w-4 h-16 bg-orange-200 absolute top-44 left-5"></div>
              <div className="w-4 h-16 bg-orange-200 absolute top-44 left-11"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar capítulo"
                className="pl-10 bg-gray-50 border-gray-200 rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="bg-gray-500 text-white hover:bg-gray-600 border-gray-500 rounded-lg px-6"
              >
                Ordenar
              </Button>
              <Button
                variant="outline"
                className="bg-gray-500 text-white hover:bg-gray-600 border-gray-500 rounded-lg px-6"
              >
                Ordenar
              </Button>
            </div>
          </div>
        </div>

        {/* Chapters Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-black hover:bg-black">
                <TableHead className="text-white font-semibold py-4">
                  Título
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Número
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Estado
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Acciones
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chapters.map((chapter, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium py-4">
                    {chapter.title}
                  </TableCell>
                  <TableCell className="text-gray-600">
                    {chapter.number}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${chapter.statusColor} text-status-green-foreground hover:${chapter.statusColor}/80 rounded-full px-3 py-1`}
                    >
                      {chapter.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-gray-600 border-gray-300 hover:bg-gray-50 rounded-lg"
                    >
                      Leer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
