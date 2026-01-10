import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  sendEmail(event: Event, name: string, email: string, message: string) {
    event.preventDefault();
    const subject = `Contato do Portfólio de ${name}`;
    const body = `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:mateussantos212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}