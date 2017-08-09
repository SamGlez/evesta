import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CenterService } from '../../services/center.service';


@Component({
  selector: 'app-center-detail',
  templateUrl: './center-detail.component.html',
  styleUrls: ['./center-detail.component.css']
})
export class CenterDetailComponent implements OnInit {
  center:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private centerService: CenterService)
    {}

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.getCenterDetails(params['id']);
      });
    }

    getCenterDetails(id) {
      this.centerService.get(id)
        .subscribe((center) => {
          this.center = center;
        });
    }


  deleteCenter() {
  if (window.confirm('Are you sure?')) {
    this.centerService.remove(this.center._id)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}

}
