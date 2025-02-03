import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Organization {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const defaultOrganizations: Organization[] = [
  {
    id: "1",
    name: "FleetCo Main",
    address: "123 Fleet Street, City",
    email: "contact@fleetco.com",
    phone: "(555) 123-4567",
  },
];

const OrganizationList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Organizations</h1>
        <Button onClick={() => navigate("/organization/onboarding")}>
          <Plus className="h-4 w-4 mr-2" /> Add Organization
        </Button>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {defaultOrganizations.map((org) => (
          <Card key={org.id} className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{org.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{org.address}</p>
                    <p>{org.email}</p>
                    <p>{org.phone}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrganizationList;
