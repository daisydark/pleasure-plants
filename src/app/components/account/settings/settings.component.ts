import { Component, OnInit } from '@angular/core';
import {FileuploadService} from '../../../services/account/fileupload.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  fileToUpload: File = null;

  constructor(
    public fileuploadService: FileuploadService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity(): void {
    this.fileuploadService.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
