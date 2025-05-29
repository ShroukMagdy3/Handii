import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule ,FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  messages: { user: boolean; text: string }[] = [];
  userInput: string = '';


  responses: { [key: string]: string } = {
    'hello': 'Hello! How can I help you today?',
    'price': 'Our products range from $10 to $100 depending on the item.',
    'shipping': 'We offer worldwide shipping within 5-10 business days.',
    'handmade': 'Yes! All our products are 100% handmade with love.',
    'workshops':'You Can visit the section of workShops to get more information',
    'contact':'You send the message on our mail shorokmagdy15@gmail.com',
  };

  sendMessage() {
    if (this.userInput.trim() === '') return;
    this.messages.push({ user: true, text: this.userInput });

    const response = this.getResponse(this.userInput.toLowerCase());
    setTimeout(() => {
      this.messages.push({ user: false, text: response });
    }, 500);

    this.userInput = '';
  }

  getResponse(message: string): string {
    for (let key in this.responses) {
      if (message.includes(key)) {
        return this.responses[key];
      }
    }
    return "I'm not sure about that. Can you ask something else?";
  }
}
