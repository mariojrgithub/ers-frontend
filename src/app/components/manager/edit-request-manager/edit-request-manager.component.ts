import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/models/Request';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-edit-request-manager',
  templateUrl: './edit-request-manager.component.html',
  styleUrls: ['./edit-request-manager.component.css']
})
export class EditRequestManagerComponent implements OnInit {

  newRequest: Request = {
    expenseId: 0,
    expenseAmount: 0,
    employeeId: 0,
    requestDate: "",
    expenseStatus: "",
    adjudicatedDate: "",
    approveDeny: ""
  }

  selections: any[] = ['approve', 'deny'];

  constructor(private requestService: RequestsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let requestId: any = this.activatedRoute.snapshot.paramMap.get("expenseId");
    console.log(requestId);

    this.requestService.getRequestById(requestId)
          .subscribe({
            next: request => {
              this.newRequest = request;
              console.log(request);
            }
          })
  }

  

}
