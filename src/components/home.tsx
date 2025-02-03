import React from "react";
import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import StatisticsGrid from "./dashboard/StatisticsGrid";
import VehicleGrid from "./vehicles/VehicleGrid";
import DriverStatusBoard from "./drivers/DriverStatusBoard";

interface HomeProps {
  userName?: string;
  userAvatar?: string;
}

const Home = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: HomeProps) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <DashboardHeader
          userName={userName}
          userAvatar={userAvatar}
          onSearch={(query) => console.log("Search:", query)}
        />
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6 space-y-6 max-w-7xl mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome back, {userName}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Here's what's happening with your fleet today.
              </p>
            </div>

            <StatisticsGrid
              statistics={{
                totalVehicles: 124,
                activeDrivers: 85,
                availableVehicles: 62,
                fuelConsumption: 1234,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Vehicle Status</h2>
                </div>
                <VehicleGrid />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Driver Status</h2>
                </div>
                <DriverStatusBoard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
