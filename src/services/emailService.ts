
import { toast } from "@/hooks/use-toast";

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// This service handles sending emails from the contact form
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // In a real application, this would be an API call to your backend
    // For demonstration purposes, we're simulating an API call
    console.log("Sending email with data:", data);
    
    // Simulate network request
    const response = await new Promise<Response>((resolve) => {
      setTimeout(() => {
        resolve(new Response(JSON.stringify({ success: true }), { 
          status: 200, 
          headers: { 'Content-Type': 'application/json' }
        }));
      }, 1500);
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send email");
    }
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    toast({
      title: "Error",
      description: error instanceof Error ? error.message : "Failed to send your message. Please try again.",
      variant: "destructive",
    });
    return false;
  }
};
