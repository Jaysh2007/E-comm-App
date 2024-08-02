export default class ProductModel {
  constructor(id, name, desc, price, imageUrl, category, sizes) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static add(product){
    product.id = products.length +1;
    products.push(product)
    return product;
  }

  static GetAll(){
    return products;
  }
}

var products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    19.99,
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
    "Home Decor",
    ["M", "L", "XL"]
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    9.99,
    "https://m.media-amazon.com/images/I/61BfepElKPL._AC_SY95_.jpg",
    "Footwear",
    ["8", "9", "10"]
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    129.99,
    "https://m.media-amazon.com/images/I/71657TiFeHL._AC_SY200_.jpg",
    "Mobile",
    ["15", "15 PRO", "15 PRO MAX"]
  ),
];
