import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image"; // For optimized images

interface BlogPostCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
}

// Mock data for blog posts
export const blogPostsData = [
  {
    title: "The Future of AI in Marketing: What to Expect in 2025",
    description: "Explore the cutting-edge trends and predictions for AI's impact on digital marketing strategies this year.",
    imageUrl: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
    date: "July 25, 2025",
  },
  {
    title: "5 Ways ADmyBRAND AI Suite Boosts Your SEO",
    description: "Learn how our AI tools can revolutionize your search engine optimization efforts, from keyword research to content creation.",
    imageUrl: "https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
    date: "July 20, 2025",
  },
  {
    title: "Crafting Compelling Ad Copy with AI: A Step-by-Step Guide",
    description: "Master the art of high-converting ad copy using our intuitive AI generator. Boost your campaign performance.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683494994773-1e4500d7adb3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
    date: "July 15, 2025",
  },
  {
    title: "Decoding Customer Behavior: AI-Powered Predictive Analytics",
    description: "Dive deep into how predictive AI can unearth valuable customer insights, enabling smarter marketing decisions.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1677846526184-86a9d87b5394?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
    date: "July 10, 2025",
  },
  {
    title: "Maximizing ROI: Optimizing Ad Spend with AI",
    description: "Discover strategies to cut wasted ad spend and reallocate budget efficiently using ADmyBRAND's AI optimization.",
    imageUrl: "https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "#",
    date: "July 05, 2025",
  },
];

export function BlogPostCard({ title, description, imageUrl, link, date }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col bg-card/50 backdrop-blur-sm border border-border-foreground/20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={link} className="block relative h-48 w-full overflow-hidden">
        {/* Using Next.js Image component for optimization */}
        <Image
          src={imageUrl}
          alt={title}
          fill // Makes image fill parent
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
        />
      </Link>
      <CardHeader className="p-4 pb-0 flex flex-col items-start">
        <p className="text-sm text-muted-foreground mb-1">{date}</p>
        <CardTitle className="text-xl font-bold text-foreground leading-tight">
          <Link href={link} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      <div className="p-4 pt-0">
        <Link href={link} className="text-primary hover:underline font-semibold text-sm">
          Read More &rarr;
        </Link>
      </div>
    </Card>
  );
}