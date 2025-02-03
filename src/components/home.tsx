import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, trend, trendLabel }) => (
  <div className="bg-white rounded-lg p-6 space-y-6">
    <div className="flex items-start gap-3">
      <div className="mt-1">{Icon}</div>
      <div>
        <div className="text-gray-500 text-sm">{label}</div>
        <div className="text-[32px] font-medium">{value}</div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full w-3/4 bg-gray-900 rounded-full" />
      </div>
      <span className="text-sm text-gray-500">
        {trend} {trendLabel}
      </span>
    </div>
  </div>
);

const TableHeader = ({ children, sortable = true }) => (
  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 bg-gray-50">
    <div className="flex items-center gap-2">
      {children}
      {sortable && <ArrowUpDown className="h-3 w-3" />}
    </div>
  </th>
);

const Home = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-medium">Fleet Overview</h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          icon={
            <svg
              className="w-5 h-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Active Drivers"
          value="42"
          trend="+12%"
          trendLabel="from last month"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 17H5M19 17C19.5304 17 20.0391 17.2107 20.4142 17.5858C20.7893 17.9609 21 18.4696 21 19V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V19C3 18.4696 3.21071 17.9609 3.58579 17.5858C3.96086 17.2107 4.46957 17 5 17M19 17V15M5 17V15M17 15V5C17 4.46957 16.7893 3.96086 16.4142 3.58579C16.0391 3.21071 15.5304 3 15 3H9C8.46957 3 7.96086 3.21071 7.58579 3.58579C7.21071 3.96086 7 4.46957 7 5V15M17 15H7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Active Vehicles"
          value="38"
          trend="+5%"
          trendLabel="from last month"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7H3M21 7H18M18 7C18 7.53043 17.7893 8.03914 17.4142 8.41421C17.0391 8.78929 16.5304 9 16 9C15.4696 9 14.9609 8.78929 14.5858 8.41421C14.2107 8.03914 14 7.53043 14 7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5C16.5304 5 17.0391 5.21071 17.4142 5.58579C17.7893 5.96086 18 6.46957 18 7ZM9 17H21M3 17H6M6 17C6 17.5304 5.78929 18.0391 5.41421 18.4142C5.03914 18.7893 4.53043 19 4 19C3.46957 19 2.96086 18.7893 2.58579 18.4142C2.21071 18.0391 2 17.5304 2 17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15C4.53043 15 5.03914 15.2107 5.41421 15.5858C5.78929 15.9609 6 16.4696 6 17Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Maintenance Alerts"
          value="3"
          trend="-2"
          trendLabel="from last week"
        />
        <StatCard
          icon={
            <svg
              className="w-5 h-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          label="Critical Issues"
          value="1"
          trend=""
          trendLabel="No change"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Drivers</h2>
            <div className="flex items-center gap-2">
              <Input
                className="h-9 w-[240px]"
                placeholder="Search drivers..."
              />
              <Button
                variant="ghost"
                className="h-9 px-3 text-gray-500 hover:text-gray-900"
              >
                Sort by Name <ArrowUpDown className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="-mx-6">
            <table className="w-full">
              <thead>
                <tr className="border-y border-gray-100">
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Last Updated</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4">Jane Smith</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                      active
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">2024-03-18</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                      active
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">2024-03-20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Vehicles</h2>
            <div className="flex items-center gap-2">
              <Input
                className="h-9 w-[240px]"
                placeholder="Search vehicles..."
              />
              <Button
                variant="ghost"
                className="h-9 px-3 text-gray-500 hover:text-gray-900"
              >
                Sort by Name <ArrowUpDown className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="-mx-6">
            <table className="w-full">
              <thead>
                <tr className="border-y border-gray-100">
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Last Updated</TableHeader>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-3 px-4">Toyota Camry</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-600">
                      inactive
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">2024-03-19</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
