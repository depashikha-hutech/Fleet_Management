import React from "react";
import { Card, CardContent } from "../ui/card";
import { Gauge, Users, Car, Fuel } from "lucide-react";

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatisticCard = ({
  title = "Statistic",
  value = "0",
  icon = <Gauge className="h-6 w-6 text-blue-600" />,
  trend = { value: 0, isPositive: true },
}: StatisticCardProps) => {
  return (
    <Card className="bg-white border-blue-100">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">{title}</p>
            <h3 className="text-2xl font-bold mt-1 text-blue-900">{value}</h3>
            <p
              className={`text-sm mt-2 ${trend.isPositive ? "text-emerald-600" : "text-rose-600"}`}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}% from last month
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatisticsGridProps {
  statistics?: {
    totalVehicles: number;
    activeDrivers: number;
    availableVehicles: number;
    fuelConsumption: number;
  };
}

const StatisticsGrid = ({
  statistics = {
    totalVehicles: 124,
    activeDrivers: 85,
    availableVehicles: 62,
    fuelConsumption: 1234,
  },
}: StatisticsGridProps) => {
  return (
    <div className="w-full bg-blue-50/50 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatisticCard
          title="Total Vehicles"
          value={statistics.totalVehicles}
          icon={<Car className="h-6 w-6 text-blue-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatisticCard
          title="Active Drivers"
          value={statistics.activeDrivers}
          icon={<Users className="h-6 w-6 text-blue-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatisticCard
          title="Available Vehicles"
          value={statistics.availableVehicles}
          icon={<Car className="h-6 w-6 text-blue-600" />}
          trend={{ value: 5, isPositive: false }}
        />
        <StatisticCard
          title="Fuel Consumption (L)"
          value={statistics.fuelConsumption}
          icon={<Fuel className="h-6 w-6 text-blue-600" />}
          trend={{ value: 3, isPositive: false }}
        />
      </div>
    </div>
  );
};

export default StatisticsGrid;
