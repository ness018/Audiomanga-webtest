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
import { LuffyCharacter } from "@/components/LuffyCharacter";

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
      <div className="relative h-[400px] bg-hero-bg flex items-center justify-between px-8 md:px-16 overflow-hidden">
        {/* Manga comic pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' opacity='0.3'%3E%3Crect x='10' y='10' width='25' height='20' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3Crect x='45' y='5' width='20' height='30' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3Crect x='5' y='45' width='30' height='15' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3Crect x='40' y='50' width='35' height='25' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        ></div>

        {/* Additional manga panel overlays */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-8 left-16 w-20 h-24 border border-white/40 rounded transform rotate-3"></div>
          <div className="absolute top-12 right-32 w-16 h-20 border border-white/30 rounded transform -rotate-2"></div>
          <div className="absolute bottom-12 left-32 w-24 h-16 border border-white/35 rounded transform rotate-1"></div>
          <div className="absolute bottom-8 right-16 w-18 h-22 border border-white/40 rounded transform -rotate-1"></div>
          <div className="absolute top-32 left-8 w-14 h-18 border border-white/25 rounded"></div>
          <div className="absolute bottom-32 right-8 w-22 h-14 border border-white/30 rounded transform rotate-2"></div>
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
        <div className="hidden lg:block relative">
          <LuffyCharacter />
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
