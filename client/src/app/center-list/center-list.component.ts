import { Component, OnInit } from '@angular/core';
import { CenterService } from '../../services/center.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-center-list',
  templateUrl: './center-list.component.html',
  styleUrls: ['./center-list.component.css']
})
export class CenterListComponent implements OnInit {
  centers:Observable<Array<object>>;
  constructor(private CenterService: CenterService) { }

  ngOnInit() {
    this.CenterService.getList()
      .subscribe((centers) => {
        this.centers = centers;
      });

  }

}
