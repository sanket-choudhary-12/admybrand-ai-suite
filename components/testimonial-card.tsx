import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // For user images
import { Quote } from "lucide-react"; // Icon for quotes

// Define type for testimonial data
interface Testimonial {
  quote: string;
  name: string;
  title: string; // e.g., CEO of CompanyX
  avatar: string; // URL to avatar image
}

// Define props for TestimonialCard component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6 h-full flex flex-col justify-between bg-card/50 backdrop-blur-sm border border-border-foreground/20 shadow-lg">
      <CardContent className="flex-grow pt-0">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <p className="text-lg italic text-foreground mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </CardContent>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </Card>
  );
}

// Mock Data for Testimonials
export const testimonialsData: Testimonial[] = [
  {
    quote: "ADmyBRAND AI Suite revolutionized our marketing campaigns. The AI-powered insights are incredibly accurate and have significantly boosted our ROI.",
    name: "Alice Smith",
    title: "Marketing Director, InnovateCorp",
    avatar: "/avatars/avatar1.jpg", // Placeholder - you might need to add these images to your public folder
  },
  {
    quote: "The content generation feature saves us hours every week. We can now produce high-quality, engaging content at scale, thanks to ADmyBRAND.",
    name: "Bob Johnson",
    title: "Content Lead, Creative Solutions",
    avatar: "/avatars/avatar2.jpg",
  },
  {
    quote: "We've seen a measurable improvement in our ad performance since implementing ADmyBRAND. It's truly a game-changer for digital marketing.",
    name: "Carol White",
    title: "Founder & CEO, Growth Catalyst",
    avatar: "/avatars/avatar3.jpg",
  },
  {
    quote: "The personalized engagement tools are fantastic. Our customers feel more valued, leading to higher conversion rates and loyalty.",
    name: "David Green",
    title: "CRM Manager, Customer Connect",
    avatar: "/avatars/avatar4.jpg",
  },
  {
    quote: "Implementing ADmyBRAND AI Suite was one of the best decisions for our startup. The platform is intuitive, powerful, and delivers real results.",
    name: "Eve Black",
    title: "Co-founder, Startup Success",
    avatar: "/avatars/avatar5.jpg",
  },
];