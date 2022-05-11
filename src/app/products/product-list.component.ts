import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  listFilter: string = 'cart'
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "../../assets/images/garden-cart.PNG"
    },
    {
      "productId": 2,
      "productName": "Hammer",
      "productCode": "GDN-0023",
      "releaseDate": "March 25, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 48.99,
      "starRating": 2.2,
      "imageUrl": "../../assets/images/garden-cart.PNG"
    },
  ];
  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("hello")
  }
}