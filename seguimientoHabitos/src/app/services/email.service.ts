// src/app/services/email.service.ts
import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  // Método para enviar el correo
  sendEmail(formData: { name: string; email: string; message: string }): Promise<any> {
    return emailjs.send(
      'service_rbcpbt7',    // Reemplaza con tu Service ID de EmailJS
      'template_2df7a3r',    // Reemplaza con tu Template ID de EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'Nd9UZ8FU9EzZ7lRoW'         // Reemplaza con tu User ID de EmailJS
    );
  }
}
