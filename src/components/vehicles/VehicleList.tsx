import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import VehicleGrid from "./VehicleGrid";

const VehicleList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vehicles</h1>
        <Button onClick={() => navigate("/vehicles/onboarding")}>
          <Plus className="h-4 w-4 mr-2" /> Add Vehicle
        </Button>
      </div>
      <VehicleGrid />
    </div>
  );
};

export default VehicleList;
