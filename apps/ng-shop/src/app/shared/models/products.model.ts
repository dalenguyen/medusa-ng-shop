export interface ProductOption {
    title: string
    value: string[]
}

export interface ProductPrice {
    "currency_code": string,
    "amount": number
}

export interface ProductVariant {
    "title": string,
    "prices": ProductPrice[],
    "options": ProductOption[],
    "inventory_quantity": number,
    "manage_inventory": boolean
}

export interface Product {
    id: string
    "title": string,
    "subtitle": string | null,
    "description": string,
    thumbnail: string
    "handle": string,
    "is_giftcard": boolean,
    "weight": number,
    "images": string[],
    "options": ProductOption[],
    "variants": ProductVariant[]
}