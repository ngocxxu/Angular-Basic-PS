import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  showImage: boolean = false;
  pageTitle: string = 'Product List';
  showMessage: string = '';
  errorMessage: string = '';
  sub! : Subscription;
  //sub: Subscription | undefined;

  //listFilter: string = 'cart'
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    //console.log(this._listFilter);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    // {
    //   productId: 2,
    //   productName: 'Garden Cart',
    //   productCode: 'GDN-0023',
    //   releaseDate: 'March 18, 2021',
    //   description: '15 gallon capacity rolling garden cart',
    //   price: 32.99,
    //   starRating: 4.2,
    //   imageUrl: '../../assets/images/garden-cart.PNG',
    // },
    // {
    //   productId: 2,
    //   productName: 'Hammer',
    //   productCode: 'GDN-0023',
    //   releaseDate: 'March 25, 2021',
    //   description: '15 gallon capacity rolling garden cart',
    //   price: 48.99,
    //   starRating: 2.2,
    //   imageUrl: '../../assets/images/garden-cart.PNG',
    // },
  ];

  constructor(private productService: ProductService){}

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((product) => {
      return product.productName
        .toLocaleLowerCase()
        .includes(filterBy.toLocaleLowerCase());
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = this.products
      },
      error: err => this.errorMessage = err,
    });
    //this.filteredProducts = this.products
    //this.listFilter = 'cart';
  }

  // giống componentWillUnmount trong reactjs
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.showMessage = message;
  }
}
