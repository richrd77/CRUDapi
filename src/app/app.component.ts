import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Comment } from './Comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CRUDapi';
  public comments: Comment[];
  constructor(public mService: MainService) { }

  ngOnInit(): void {
    this.mService.PerformGet().subscribe(c => this.comments = c);
  }


}
