import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product';

@Component({
  //selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // chỉ lấy parameter 1 lần và truyền vô tham số cần lấy
    // mặc định Id là string | underfine, nên cần cast về Number
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = {
      productId: 2,
      productName: 'Hammer',
      productCode: 'GDN-0023',
      releaseDate: 'March 25, 2021',
      description: '15 gallon capacity rolling garden cart',
      price: 48.99,
      starRating: 2.2,
      imageUrl: '../../assets/images/garden-cart.PNG',
    };
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }
}
