import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categories/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }
  saveCategory(name:any) {
    this.categoryService.createCategory({ id: 0, name: name.value }).subscribe(data => {
      this.router.navigate(["/home"]);
    });
  }

}
