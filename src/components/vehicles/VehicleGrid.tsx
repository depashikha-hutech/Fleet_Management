import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LayoutGrid, List, Search, Filter } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  status: "available" | "in-use" | "maintenance";
  licensePlate: string;
  lastUpdated: string;
}

interface VehicleGridProps {
  vehicles?: Vehicle[];
  onViewChange?: (view: "grid" | "list") => void;
  onSearch?: (query: string) => void;
  onFilter?: (status: string) => void;
}

const defaultVehicles: Vehicle[] = [
  {
    id: "1",
    name: "Toyota Camry",
    status: "available",
    licensePlate: "ABC-123",
    lastUpdated: "2024-03-20 10:00 AM",
  },
  {
    id: "2",
    name: "Ford Transit",
    status: "in-use",
    licensePlate: "XYZ-789",
    lastUpdated: "2024-03-20 09:30 AM",
  },
  {
    id: "3",
    name: "Honda CR-V",
    status: "maintenance",
    licensePlate: "DEF-456",
    lastUpdated: "2024-03-20 08:45 AM",
  },
];

const VehicleGrid = ({
  vehicles = defaultVehicles,
  onViewChange = () => {},
  onSearch = () => {},
  onFilter = () => {},
}: VehicleGridProps) => {
  const [view, setView] = useState<"grid" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewChange = (newView: "grid" | "list") => {
    setView(newView);
    onViewChange(newView);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800";
      case "in-use":
        return "bg-blue-100 text-blue-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg border">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Button
            variant={view === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => handleViewChange("grid")}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={view === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => handleViewChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-1 gap-4 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Vehicle Grid/List */}
      {view === "grid" ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{vehicle.name}</h3>
                  <Badge className={getStatusColor(vehicle.status)}>
                    {vehicle.status}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">
                  <p>License Plate: {vehicle.licensePlate}</p>
                  <p>Last Updated: {vehicle.lastUpdated}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle Name</TableHead>
                <TableHead>License Plate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.name}</TableCell>
                  <TableCell>{vehicle.licensePlate}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(vehicle.status)}>
                      {vehicle.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{vehicle.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default VehicleGrid;
