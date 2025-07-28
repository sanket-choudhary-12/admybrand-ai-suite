"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingCalculator() {
  const [users, setUsers] = useState<number>(5); // Default to 5 users
  const [isAnnual, setIsAnnual] = useState<boolean>(false); // Default to monthly billing

  // Base pricing (per user per month for simplicity)
  const basePricePerUser = 10; // $10 per user per month for Pro plan calculation
  const annualDiscountPercentage = 20; // 20% discount for annual billing

  // Calculate Pro Plan Price
  const calculateProPrice = () => {
    let price = users * basePricePerUser;
    if (isAnnual) {
      price = price * 12 * (1 - annualDiscountPercentage / 100); // Annual price with discount
    }
    return price;
  };

  const proPrice = calculateProPrice();

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border-foreground/20 rounded-lg shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Estimate Your Costs</CardTitle>
        <CardDescription className="text-muted-foreground">
          Adjust the sliders to see estimated pricing for your team.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Users Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="users" className="text-lg text-foreground">Number of Users: <span className="font-semibold text-primary">{users}</span></Label>
            {users >= 50 && (
              <span className="text-sm text-yellow-500">For 50+ users, consider Enterprise!</span>
            )}
          </div>
          <Slider
            id="users"
            min={1}
            max={100}
            step={1}
            value={[users]}
            onValueChange={(val) => setUsers(val[0])}
            className="w-full"
          />
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="billing-cycle" className="text-lg text-foreground">
            Billing Cycle: {isAnnual ? "Annually" : "Monthly"}
          </Label>
          <Switch
            id="billing-cycle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
        </div>

        {/* Estimated Price Display */}
        <div className="text-center bg-primary-foreground/10 p-6 rounded-lg border border-border">
          <p className="text-muted-foreground text-lg mb-2">Estimated Pro Plan Cost:</p>
          <p className="text-5xl font-extrabold text-primary">
            ${proPrice.toFixed(0)}
            <span className="text-2xl font-semibold text-foreground">/{isAnnual ? "year" : "month"}</span>
          </p>
          {isAnnual && (
            <p className="text-sm text-green-500 mt-2">
              You save {annualDiscountPercentage}% with annual billing!
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold">
            Start Pro Plan
          </Button>
          {users >= 50 && (
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-lg font-semibold border-primary text-primary hover:bg-primary-foreground/10">
              Contact for Enterprise
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}