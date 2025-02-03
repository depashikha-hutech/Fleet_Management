import { Car } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-blue-600 rounded-lg">
        <Car className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-blue-900">FleetFlow</span>
        <span className="text-xs text-blue-600">Fleet Management System</span>
      </div>
    </div>
  );
};

export default Logo;
