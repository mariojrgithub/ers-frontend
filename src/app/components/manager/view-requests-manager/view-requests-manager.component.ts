import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Request } from 'src/app/models/Request';

@Component({
  selector: 'app-view-requests-manager',
  templateUrl: './view-requests-manager.component.html',
  styleUrls: ['./view-requests-manager.component.css']
})
export class ViewRequestsManagerComponent implements OnInit {

  requests?: Request[];

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
    this.retrieveRequests();
  }

  retrieveRequests(): void {
    this.requestService.getManagerRequests()
        .subscribe({
          next: (requests) => {
          this.requests = requests;
          console.log(requests);
        },
        error: (e) => console.log(e)
      })     
  }

}
