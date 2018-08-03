export class Product {
  constructor() {
    console.log('Product module');

    this.id = 6;
    this.products = [
      {
        id: 1,
        reviews: [1, 2, 3]
      },
      {
        id: 2,
        reviews: [4, 5, 6]
      },
      {
        id: 3,
        reviews: [7, 8, 9]
      },
      {
        id: 4,
        reviews: [10, 11, 12]
      },
      {
        id: 5,
        reviews: [13, 14, 15]
      }
    ];
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.filter(product => product.id === +id)[0];
  }

  getProductReviews(id) {
    return this.getProductById(id).reviews;
  }

  addProduct() {
    const newProduct = {
      id: this.id++,
      reviews: []
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
