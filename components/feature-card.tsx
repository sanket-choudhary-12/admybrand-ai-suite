import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Rocket, TrendingUp, Users, Search, Shield } from "lucide-react"; // All icons

// Define FeatureCard props interface
interface FeatureCardProps {
  icon: React.ElementType; // Type for the Lucide icon component
  title: string;
  description: string;
}

// Mock data for features (keep this as is)
export const featuresData = [
  {
    icon: Brain,
    title: "Intelligent Content Generation",
    description: "Leverage AI to create engaging marketing copy, blogs, and social media posts in minutes.",
  },
  {
    icon: Rocket,
    title: "Automated Campaign Optimization",
    description: "AI continuously monitors and optimizes your ad campaigns for maximum ROI.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics & Insights",
    description: "Gain deeper understanding of market trends and predict customer behavior with AI-driven insights.",
  },
  {
    icon: Users,
    title: "Personalized Customer Engagement",
    description: "Craft unique customer journeys and interactions tailored to individual preferences.",
  },
  {
    icon: Search,
    title: "Smart SEO & Keyword Strategy",
    description: "Identify high-ranking keywords and optimize your content to dominate search.",
  },
  {
    icon: Shield,
    title: "Fraud Detection & Brand Safety",
    description: "Protect your brand and campaigns from fraudulent activities and unsafe placements.",
  },
];

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="flex flex-col items-center text-center p-6 bg-card/50 backdrop-blur-sm border border-border-foreground/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center p-0 mb-4"> {/* MODIFIED CLASS FOR CARDHEADER */}
        <Icon className="h-12 w-12 text-primary mb-3" /> {/* MODIFIED CLASS FOR ICON */}
        <CardTitle className="text-xl font-bold text-foreground leading-tight">{title}</CardTitle> {/* ADDED leading-tight */}
      </CardHeader>
      <CardContent className="p-0">
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}