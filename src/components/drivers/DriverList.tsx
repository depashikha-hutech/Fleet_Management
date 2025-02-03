import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DriverStatusBoard from "./DriverStatusBoard";

const DriverList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Drivers</h1>
        <Button onClick={() => navigate("/drivers/onboarding")}>
          <Plus className="h-4 w-4 mr-2" /> Add Driver
        </Button>
      </div>
      <DriverStatusBoard />
    </div>
  );
};

export default DriverList;
