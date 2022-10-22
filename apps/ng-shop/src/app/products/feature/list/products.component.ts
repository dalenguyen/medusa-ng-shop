import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ShopService } from '../../../shared/services';

@Component({
  selector: 'shop-products',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
   <!-- https://tailwindui.com/components/ecommerce/components/product-lists -->
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
        <div class="group relative" *ngFor="let product of products$ | async">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img [ngSrc]="product.thumbnail" [alt]="product.title" class="h-full w-full object-cover object-center lg:h-full lg:w-full" width="560" height="640">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{product.title}}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p class="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  shopService = inject(ShopService)

  products$ = this.shopService.getProducts()

  constructor() { }

  ngOnInit(): void { }
}
