"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PricingCalculator } from "@/components/pricing-calculator";
import { BlogPostCard, blogPostsData } from "@/components/blog-post-card"; // ADD THIS LINEimport { PricingCalculator } from "@/components/pricing-calculator"; // ADD THIS LINE

import { FeatureCard, featuresData } from "@/components/feature-card";
import { PricingCard, pricingData } from "@/components/pricing-card";
import { TestimonialCard, testimonialsData } from "@/components/testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import social media icons
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone } from "lucide-react"; // Added Phone icon for contact section
import Link from "next/link"; // For internal links

// Import ContactForm
import { ContactForm } from "@/components/contact-form";

// Define mock data for FAQ
const faqData = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer: "ADmyBRAND AI Suite is an all-in-one AI-powered marketing platform designed to help businesses automate content creation, optimize campaigns, analyze data, and engage customers more effectively.",
  },
  {
    question: "How does AI content generation work?",
    answer: "Our AI uses advanced natural language processing (NLP) to generate high-quality marketing copy, blog posts, social media updates, and more, based on your input and desired tone.",
  },
  {
    question: "Is ADmyBRAND AI Suite suitable for small businesses?",
    answer: "Absolutely! We offer flexible plans, including a free tier and affordable 'Pro' options, making it accessible for businesses of all sizes to leverage AI in their marketing.",
  },
  {
    question: "Can I integrate ADmyBRAND AI Suite with my existing tools?",
    answer: "Yes, our Enterprise plan offers custom integrations to ensure seamless workflow with your current CRM, analytics, and marketing platforms.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide community support for free users, email & chat support for Pro users, and dedicated account management with priority support for our Enterprise clients.",
  },
  {
    question: "How secure is my data with ADmyBRAND?",
    answer: "Data security is our top priority. We implement industry-leading encryption and security protocols to protect your information. More details are available in our privacy policy.",
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Nav */}
      <header className="flex z-50 items-center justify-between p-4 border-b border-border bg-background text-foreground sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold">ADmyBRAND AI Suite</h1>
        <div className="flex items-center space-x-2">
          <Label htmlFor="theme-toggle">Dark Mode</Label>
          <Switch
            id="theme-toggle"
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center flex-grow p-8 text-center bg-gradient-to-br from-background via-card to-background overflow-hidden min-h-screen"> {/* ADDED min-h-screen */}       
      <h2 className="z-10 text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground">          Unlock Your Marketing Potential with <span className="text-primary">AI</span>
        </h2>
        <p className="z-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">          Revolutionize your digital strategies with ADmyBRAND AI Suite – powerful tools for content, campaigns, and insights.
        </p>
        <Button size="lg" className="z-10 px-8 py-3 text-lg font-semibold mb-12"> {/* Added mb-12 here for spacing */}
          Get Started for Free
        </Button>

        {/* ADDED HERO IMAGE (Placeholder) */}
        <div className="absolute inset-0 w-full h-full">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      {/* You should replace this with your own video file for best performance */}
      {/* Example: <source src="/videos/your-hero-video.mp4" type="video/mp4" /> */}
      <source src="https://media.istockphoto.com/id/866406672/video/time-lapse-of-times-square-new-york.mp4?s=mp4-640x640-is&k=20&c=ZDnqcSOO3-PyY3jihW-4TgesOd3CN7Qg9q2gSD_OJKA=" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Optional: Add an overlay for better text readability */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted text-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up"> {/* ADDED AOS */}
            Powerful Features at Your Fingertips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200"> {/* ADDED AOS */}
            {featuresData.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-background text-foreground">
        {/* Pricing Calculator Section */}
<section id="calculator" className="py-16 md:py-24 bg-gradient-to-br from-card to-background text-foreground">
    <div className="container mx-auto px-4 max-w-2xl">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Calculate Your Ideal Plan
        </h3>
        <div data-aos="fade-up" data-aos-delay="200">
            <PricingCalculator />
        </div>
    </div>
</section>

{/* Pricing Section (Existing) */}
<section id="pricing" className="py-16 md:py-24 bg-background text-foreground">
    {/* ... (Existing pricing section content) ... */}
</section>
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up"> {/* ADDED AOS */}
            Flexible Plans for Every Need
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="200"> {/* ADDED AOS */}
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                buttonText={plan.buttonText}
                isPopular={plan.isPopular}
                ctaLink={plan.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-muted text-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up"> {/* ADDED AOS */}
            What Our Customers Say
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            data-aos="fade-up" data-aos-delay="200" // ADDED AOS
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up"> {/* ADDED AOS */}
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full" data-aos="fade-up" data-aos-delay="200"> {/* ADDED AOS */}
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-left py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

{/* Blog/Resources Section */}
<section id="blog" className="py-16 md:py-24 bg-background text-foreground">
  <div className="container mx-auto px-4 max-w-6xl">
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
      Latest Insights & Resources
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
      {blogPostsData.map((post, index) => (
        <BlogPostCard
          key={index}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          link={post.link}
          date={post.date}
        />
      ))}
    </div>
    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
      <Link href="#" className="text-lg font-semibold text-primary hover:underline">
        View All Resources &rarr;
      </Link>
    </div>
  </div>
</section>

{/* Contact Section (Existing) */}
<section id="contact" className="py-16 md:py-24 bg-muted text-foreground">
    {/* ... (Existing contact section content) ... */}
</section>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted text-foreground">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Get in Touch
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col space-y-6" data-aos="fade-up" data-aos-delay="200">
              <p className="text-lg text-muted-foreground">
                Have questions or want to learn more about how ADmyBRAND AI Suite can transform your marketing? Reach out to us directly!
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-foreground">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <a href="mailto:info@admybrand.com" className="hover:underline">info@admybrand.com</a>
                </li>
                <li className="flex items-center text-foreground">
                  <Phone className="h-6 w-6 mr-3 text-primary" />
                  <a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-start text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin h-6 w-6 mr-3 text-primary flex-shrink-0 mt-0.5"
                  >
                    <path d="M12 18.7c-3.3 0-6-2.7-6-6s6-12 6-12 6 8.7 6 12c0 3.3-2.7 6-6 6zm0-15.5c-2.4 0-4.5 2-4.5 4.5S9.6 15.5 12 15.5s4.5-2 4.5-4.5-2.1-4.5-4.5-4.5zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                  </svg>
                  <p>123 AI Street, Tech City, Innovate State, 90210</p>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Twitter className="h-7 w-7" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-7 w-7" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Facebook className="h-7 w-7" />
                </Link>
                <Link href="#" className="text-foreground hover:text-primary transition-colors">
                  <Instagram className="h-7 w-7" />
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400"> {/* Added AOS to form container */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 md:py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-start md:col-span-1">
            <h4 className="text-2xl font-bold mb-4">ADmyBRAND AI Suite</h4>
            <p className="text-sm text-muted">
              Revolutionizing digital marketing with AI-powered solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-muted hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-muted hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#testimonials" className="text-muted hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="text-muted hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info (in Footer - different from Contact Section) */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-2">
              <li className="flex items-center text-muted">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@admybrand.com" className="hover:text-primary transition-colors">info@admybrand.com</a>
              </li>
              <li className="text-muted">123 AI Street, Tech City, 90210</li>
              <li className="text-muted">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border text-center text-sm text-muted">
          © 2025 ADmyBRAND AI Suite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}