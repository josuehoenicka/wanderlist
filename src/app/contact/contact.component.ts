import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm
{
  "name": string;
  "checkAge": boolean;
  "ocupation": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  model: ContactForm = {
    name: '',
    checkAge: false,
    ocupation: '',
    comment: ''
  }

  onSubmit(form: NgForm) {
    console.log('Form value', form)
  }

}
