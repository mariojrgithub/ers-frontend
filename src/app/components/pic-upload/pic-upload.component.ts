import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
// import { ImageFile } from 'src/app/models/ImageFile';

@Component({
  selector: 'app-pic-upload',
  templateUrl: './pic-upload.component.html',
  styleUrls: ['./pic-upload.component.css']
})
export class PicUploadComponent implements OnInit {

  selectedFile?: any;
  currentFile?: any;
  fileInfos?: any;

  constructor(private requestService: RequestsService) { }

  ngOnInit(): void {
  }

  selectFile(event: any): void {
    console.log(event)
    this.selectedFile = event.target.files[0];
    
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      console.log(reader.result)
    }
  }  

  upload(): void {
    let uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name );

    this.requestService.uploadImage(uploadImageData)
      .subscribe({
        next: (event) => {
          console.log(event);
        },
        error: (e) => console.log(e) 
      });
      
  }  
  
}
