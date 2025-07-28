"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner"; // Corrected import for sonner

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Corrected handleChange function to resolve TypeScript errors
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement; // Explicitly cast target
    const { id, value } = target; // Now safely destructure id and value
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // --- Frontend Validation (Basic) ---
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields."); // Using sonner's error toast
      setIsSubmitting(false);
      return;
    }

    console.log("Form Data Submitted:", formData);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would make a fetch/axios call here:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }

      toast.success("Message Sent! Thank you for contacting us."); // Using sonner's success toast
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error sending your message. Please try again."); // Using sonner's error toast
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-card/50 backdrop-blur-sm border border-border-foreground/20 rounded-lg shadow-lg">
      <div>
        <Label htmlFor="name" className="text-foreground">Name</Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-foreground">Email</Label>
        <Input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="mt-1"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-foreground">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message to us..."
          rows={5}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit" className="w-full text-lg font-semibold" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}