import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';
import { CenterService } from '../../services/center.service';

@Component({
  selector: 'app-add-center',
  templateUrl: './add-center.component.html',
  styleUrls: ['./add-center.component.css']
})
export class AddCenterComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `${environment.BASE_URL}/api/centers`
  });

  error: string;
  centerName: string;

  newCenter = {
    "name": "",
    "type": "",
    "company": "",
    "nif": "",
    "picture": "",
    "web": "",
    "province": "",
    "email": "",
    "number": "",
    "price": "",
    "services": "",
    "ratio": "",
  };
  feedback: string;

  constructor(
    private centerService: CenterService,
    public router: Router) { }

  ngOnInit() {}

  createCenter(center) {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newCenter.name);
      form.append('type', this.newCenter.type);
      form.append('company', this.newCenter.company);
      form.append('nif', this.newCenter.nif);
      form.append('picture', this.newCenter.picture);
      form.append('web', this.newCenter.web);
      form.append('province', this.newCenter.province);
      form.append('email', this.newCenter.email);
      form.append('number', this.newCenter.number);
      form.append('price', this.newCenter.price);
      form.append('services', this.newCenter.services);
      form.append('ratio', this.newCenter.ratio);
    };

    this.uploader.uploadAll()
    this.router.navigate(['/']);
  }
}
