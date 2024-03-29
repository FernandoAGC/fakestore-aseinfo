export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
    rating: Rating,
}

interface Rating {
    count: number,
    rate: number
}