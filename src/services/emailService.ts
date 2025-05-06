import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';



export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// This service handles sending emails from the contact form using EmailJS
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceId = 'service_j90w64l';
    const templateId = 'template_iz0ngd5';
    const userId = 'oeWUyaKds4GrFt9F3';

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    toast({
      title: 'Error',
      description:
        error instanceof Error
          ? error.message
          : 'Failed to send your message. Please try again.',
      variant: 'destructive',
    });
    return false;
  }
};
