import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryDetail } from '../shared/category-detail.model';
import { CategoryDetailService } from '../shared/category-detail.service';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styles: [
  ]
})
export class ProductCategoriesComponent implements OnInit {

  constructor(public service : CategoryDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:CategoryDetail){
    this.service.formData =Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteCategoryDetail(id).subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Successfully",'Add Category Details');
        },
        err=>{console.log(err)}
      )
    }
  }
}
