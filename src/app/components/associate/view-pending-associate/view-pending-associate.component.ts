import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-pending-associate',
  templateUrl: './view-pending-associate.component.html',
  styleUrls: ['./view-pending-associate.component.css']
})
export class ViewPendingAssociateComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrievePending();
  }

  retrievePending(): void {
    this.requestService.getAssociatePending(1)
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
