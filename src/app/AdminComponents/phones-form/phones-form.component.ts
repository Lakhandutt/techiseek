import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AddGedgetsService } from '../../Services/add-gedgets.service';

@Component({
  selector: 'app-phones-form',
  templateUrl: './phones-form.component.html',
  styleUrls: ['./phones-form.component.scss']
})
export class PhonesFormComponent implements OnInit {

  addPhoneForm: any;
  constructor(private formBuilder: FormBuilder, private addGadgetsService: AddGedgetsService) { }

  ngOnInit() {
    this.addPhoneForm = this.formBuilder.group({
      heading: ['', [Validators.required]],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      imageLink: ['', [Validators.required]],
      processor: ['', [Validators.required]],
      ram: ['', [Validators.required]],
      storage: ['', [Validators.required]],
      frontCamera: ['', [Validators.required]],
      backCamera: ['', [Validators.required]],
      noOfSim: ['', [Validators.required]],
      screenSize: ['', [Validators.required]],
      resolution: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      battery: ['', [Validators.required]],
      wirelessConnectivity: ['', [Validators.required]],
      warrenty: ['', [Validators.required]],
      inBox: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      description: ['', [Validators.required]],
      affiliatedLink: ['', [Validators.required]]

    })
  }

  addphone(): void {
    this.addGadgetsService.addPhone(this.addPhoneForm.value).then(
      res => console.log(res)
    );
  }

}
