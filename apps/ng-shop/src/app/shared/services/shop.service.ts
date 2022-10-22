import { Injectable } from '@angular/core';
import Medusa from "@medusajs/medusa-js";
import { environment } from '../../../environments/environment';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  medusa = new Medusa({
    maxRetries: 3,
    baseUrl: environment.shopUrl
  })

  getProducts() {
    return this.medusa.products.list().then(response => {
      return response.products
    }) as unknown as Promise<Product[]>
  }
}
