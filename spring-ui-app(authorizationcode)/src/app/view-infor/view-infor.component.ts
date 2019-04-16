import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-view-infor',
  templateUrl: './view-infor.component.html',
  styleUrls: ['./view-infor.component.css']
})
export class ViewInforComponent implements OnInit {

  public foo = { id: 2, name: 'Foo' };

  private authURL = 'http://localhost:9445/auth/principal/';
  public authInfor = null;

  constructor(private _service: ApplicationService) { }

  ngOnInit() {
  }

  getAuth() {
    this._service.getResource(this.authURL)
         .subscribe(
            data => {
              this.authInfor = data;
              console.log(data);
            },
            error =>  this.foo.name = 'Error');
  }
}
