import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Phone } from "lucide-react";

interface Driver {
  id: string;
  name: string;
  status: "active" | "off-duty" | "on-break";
  location: string;
  phone: string;
  avatar: string;
  lastUpdate: string;
}

interface DriverStatusBoardProps {
  drivers?: Driver[];
}

const defaultDrivers: Driver[] = [
  {
    id: "1",
    name: "John Doe",
    status: "active",
    location: "Downtown Route 5",
    phone: "(555) 123-4567",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    lastUpdate: "2 min ago",
  },
  {
    id: "2",
    name: "Jane Smith",
    status: "off-duty",
    location: "Home",
    phone: "(555) 234-5678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    lastUpdate: "3 hours ago",
  },
  {
    id: "3",
    name: "Mike Johnson",
    status: "on-break",
    location: "Rest Stop 12",
    phone: "(555) 345-6789",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    lastUpdate: "15 min ago",
  },
];

const statusColors = {
  active: "bg-emerald-500",
  "off-duty": "bg-blue-500",
  "on-break": "bg-amber-500",
};

const DriverCard: React.FC<{ driver: Driver }> = ({ driver }) => (
  <Card className="p-4 flex items-start gap-4 bg-white border-blue-100">
    <Avatar className="w-12 h-12">
      <img
        src={driver.avatar}
        alt={driver.name}
        className="w-full h-full object-cover"
      />
    </Avatar>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-blue-900">{driver.name}</h3>
        <Badge
          variant="secondary"
          className={`${statusColors[driver.status]} text-white`}
        >
          {driver.status.replace("-", " ").toUpperCase()}
        </Badge>
      </div>
      <div className="text-sm text-blue-600 space-y-1">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{driver.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{driver.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Last updated: {driver.lastUpdate}</span>
        </div>
      </div>
    </div>
  </Card>
);

const DriverStatusBoard: React.FC<DriverStatusBoardProps> = ({
  drivers = defaultDrivers,
}) => {
  return (
    <div className="p-6 bg-blue-50/50 rounded-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Driver Status Board
        </h2>
        <p className="text-blue-600">
          Real-time status of all drivers in the fleet
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4 bg-blue-100/50">
          <TabsTrigger value="all">All Drivers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="off-duty">Off Duty</TabsTrigger>
          <TabsTrigger value="on-break">On Break</TabsTrigger>
        </TabsList>

        <TabsContent
          value="all"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {drivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </TabsContent>

        {["active", "off-duty", "on-break"].map((status) => (
          <TabsContent
            key={status}
            value={status}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {drivers
              .filter((driver) => driver.status === status)
              .map((driver) => (
                <DriverCard key={driver.id} driver={driver} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default DriverStatusBoard;
