import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup
  // myField = new FormControl();
  constructor(private readonly fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onPathValue();
  }

  onPathValue() {
    this.contactForm.patchValue({ name : 'Josue Hoenicka', checkAge: true, ocupation: 'Freelancer', comment: 'Hello World!'})
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value)
  }

  initForm(){
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAge: ['', [Validators.required, Validators.minLength(3)]],
      ocupation: [''],
      comment: ['', [Validators.required, Validators.maxLength(200)]]
    })
  }


}
