import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryDetail } from 'src/app/shared/category-detail.model';
import { CategoryDetailService } from 'src/app/shared/category-detail.service';

@Component({
  selector: 'app-category-detail-form',
  templateUrl: './category-detail-form.component.html',
  styles: [
  ]
})
export class CategoryDetailFormComponent implements OnInit {

  constructor(public service:CategoryDetailService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(this.service.formData.categoryId == 0)
      this.insertRecode(form);
    else
    this.updateRecode(form);
  }
  insertRecode(form:NgForm){
    this.service.postCategoryDetail().subscribe(
      res =>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Submitted Successfully','Add Product Category')
      },
      err => { console.log(err)}
    );
  }

  updateRecode(form:NgForm){
    this.service.putCategoryDetail().subscribe(
      res =>{
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Updated Successfully','Add Product Category')
      },
      err => { console.log(err)}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new CategoryDetail();
  }
}
