import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../../../services/question-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-pdf',
  templateUrl: './add-pdf.component.html',
  styleUrl: './add-pdf.component.css',
})
export class AddPdfComponent implements OnInit{allowedFileExtensions: string[] = ['xls', 'xlsx']; // Update allowed extensions for Excel
file: File | undefined;

constructor(private _questionService: QuestionServiceService, private _router: Router) {}

ngOnInit(): void {}

onFileSelected(event: any) {
  this.file = event.target.files[0];
  console.log(this.file);
}

onSubmitExcel() {
  if (!this.file) {
    // Handle the case when no file is selected
    Swal.fire('Error', 'Please select an Excel file', 'error');
    return;
  }

  const formData = new FormData();
  formData.append('excelFile', this.file); 

  this._questionService.sendExcelFile(formData).subscribe(
    (data) => {
      Swal.fire('Success', 'Updated Successfully', 'success').then((e) => {
        this._router.navigate(['/manager-dashboard/view-questions']);
      });
    },
    (error) => {
      Swal.fire('Error', 'Error while adding pdf data the data', 'error');
    }
  );
}

}
