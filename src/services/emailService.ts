'use client';

import { toast } from '@/hooks/use-toast';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email');
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
