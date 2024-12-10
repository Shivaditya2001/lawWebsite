// src/services/whatsapp.ts
import axios from 'axios';

const WHATSAPP_API = 'https://graph.facebook.com/v17.0';

export class WhatsAppService {
  private token: string;
  private phoneId: string;

  constructor() {
    this.token = process.env.WHATSAPP_TOKEN!;
    this.phoneId = process.env.WHATSAPP_PHONE_ID!;
  }

  async sendMessage(to: string, message: string) {
    try {
      const response = await axios.post(
        `${WHATSAPP_API}/${this.phoneId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: to,
          type: 'text',
          text: { body: message }
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('WhatsApp API Error:', error);
      throw new Error('Failed to send WhatsApp message');
    }
  }
}
