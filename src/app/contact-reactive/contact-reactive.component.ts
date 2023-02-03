import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  ocupation:string[] = [];
  contactForm!: FormGroup;
  name!: string;
  // myField = new FormControl();
  constructor(private readonly fb:FormBuilder,
     private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ocupation = this.route.snapshot.data['ocupation']
    this.route.queryParams
    .subscribe(
      (params: Params) => {
        this.name = params['name']
      }
    )
    this.contactForm = this.initForm();
    this.onPathValue();
  }

  onPathValue() {
    // this.contactForm.patchValue({ name : 'Josue Hoenicka', checkAge: true, ocupation: 'Freelancer', comment: 'Hello World!'})
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
