export interface Product {
    id: number,
    title: string,
    desciption: string,
    price: number,
    image: string,
    category: string,
    rating: Rating,
}

interface Rating {
    count: number,
    rate: number
}