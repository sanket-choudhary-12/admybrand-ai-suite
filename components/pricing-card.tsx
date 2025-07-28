import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react"; // Import Check icon

// Define type for individual pricing feature
interface PricingFeature {
  text: string;
  included: boolean; // true if included, false if not
}

// Define type for pricing card props
interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean; // Optional: to highlight a popular plan
  ctaLink: string;
}

export function PricingCard({ name, price, period, features, buttonText, isPopular, ctaLink }: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col justify-between p-6 shadow-xl border ${isPopular ? 'border-primary-foreground scale-105' : 'border-border-foreground/20'} transition-all duration-300 h-full`}>
      {isPopular && (
        <Badge variant="default" className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          Popular
        </Badge>
      )}
      <CardHeader className="pb-4 text-center">
        <CardTitle className="text-2xl font-bold mb-2">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          <span className="text-4xl font-extrabold text-foreground">{price}</span>
          <span className="text-xl text-muted-foreground">/{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow py-4">
        <ul className="space-y-3 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${!feature.included && 'text-muted-foreground/50 line-through'}`}>
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              ) : (
                <span className="h-5 w-5 mr-2 flex-shrink-0 opacity-50"></span> // Placeholder for alignment
              )}
              {feature.text}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-6">
        <Button className="w-full text-lg font-semibold" variant={isPopular ? 'default' : 'outline'}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

// Mock Data for Pricing Tiers
export const pricingData = [
  {
    name: "Free",
    price: "$0",
    period: "month",
    features: [
      { text: "Basic AI Content Generation", included: true },
      { text: "500 AI Words/month", included: true },
      { text: "Standard Analytics", included: true },
      { text: "Community Support", included: true },
      { text: "Advanced Campaign Optimization", included: false },
      { text: "Dedicated Support", included: false },
    ],
    buttonText: "Sign up for Free",
    ctaLink: "#",
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    features: [
      { text: "Unlimited AI Content Generation", included: true },
      { text: "20,000 AI Words/month", included: true },
      { text: "Advanced Analytics & Insights", included: true },
      { text: "Email & Chat Support", included: true },
      { text: "Automated Campaign Optimization", included: true },
      { text: "Predictive Analytics", included: false },
    ],
    buttonText: "Start Pro Trial",
    isPopular: true, // This one is marked as popular
    ctaLink: "#",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "yearly",
    features: [
      { text: "All Pro Features", included: true },
      { text: "Unlimited AI Words", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Predictive Analytics & Forecasting", included: true },
      { text: "SLA & Priority Support", included: true },
    ],
    buttonText: "Contact Sales",
    ctaLink: "#",
  },
];