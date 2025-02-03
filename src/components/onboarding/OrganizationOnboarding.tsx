import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const OrganizationOnboarding = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Organization Setup</h1>
      <Card className="max-w-2xl mx-auto bg-blue-50/50">
        <CardHeader>
          <CardTitle>Organization Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Organization Name</Label>
            <Input id="name" placeholder="Enter organization name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address</Label>
            <Textarea id="address" placeholder="Enter business address" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter business email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Business Phone</Label>
              <Input id="phone" placeholder="Enter business phone" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="taxId">Tax ID / Business Number</Label>
            <Input id="taxId" placeholder="Enter tax ID or business number" />
          </div>

          <div className="pt-4 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Organization</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationOnboarding;
