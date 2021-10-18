import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemModel } from 'src/app/models/ItemModel';
import { ProductAdminService } from 'src/app/services/product-admin.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  itemList: ItemModel[] = [];
  item: ItemModel;

  showAddPopup: boolean = false;
  isEdit: boolean = false;
  addEditText: any;
  showDeletePopup: boolean = false;

  constructor(private _productAdminService: ProductAdminService) { }

  ngOnInit(): void {
    this.getItems();
  }

  //GET 
  getItems() {
    this._productAdminService.getItems().subscribe((itemListResponse: ItemModel[]) => {
      this.itemList = itemListResponse;
    });
  }

  //ADD OR UPDATE
  addItemClick() {
    this.item = new ItemModel();
    this.isEdit = false;
    this.addEditText = "Add";
    this.togglePopUp();
  }

  updateItemClick(item: ItemModel) {
    this.item = new ItemModel();
    this.item.id = item.id;
    this.item.name = item.name;
    this.item.description = item.description;
    this.item.price = item.price;
    this.isEdit = true;
    this.addEditText = "Edit";
    this.togglePopUp();
  }

  togglePopUp() {
    this.showAddPopup = !this.showAddPopup;
  }

  saveItem() {
    if (!this.isEdit) {
      this._productAdminService.addItem(this.item).subscribe((addItemResponse: ItemModel) => {
        if (addItemResponse) {
          this.getItems();
          this.togglePopUp();
        }
      }, (error: any) => {
        console.log("Unable to add item", error);
      });
    } else {
      this._productAdminService.updateItem(this.item).subscribe((updateItemResponse: ItemModel) => {
        if (updateItemResponse) {
          this.getItems();
          this.togglePopUp();
        }
      }, (error: any) => {
        console.log("unable to update item", error);
      });
    }
  }

  //DELETE
  showDeleteConfirmation(item: ItemModel) {
    this.item = new ItemModel();
    this.item = item;
    this.toggleDeleteConfirmation();
  }

  toggleDeleteConfirmation() {
    this.showDeletePopup = !this.showDeletePopup;
  }

  deleteItem() {
    this._productAdminService.deleteItem(this.item.id).subscribe((deleteReponse: any) => {
      this.getItems();
      this.toggleDeleteConfirmation();
    })
  }

  //RESET form
  resetForm(form: NgForm) {
    form.reset();
  }
}
