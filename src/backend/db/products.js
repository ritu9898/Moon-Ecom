import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Blush",
    price: "5000",
    brand: "Lakme",
    image: "https://m.media-amazon.com/images/I/61AMPLdlUkL._SL1000_.jpg",
    categoryName: "no-makeup",
    quantity: "2"
  },
  {
    _id: uuid(),
    title: "Lipstic",
    price: "3000",
    brand: "Maybelline",
    image: "https://m.media-amazon.com/images/I/71il0lTr6KL._SL1500_.jpg",
    categoryName: "party",
    quantity: "2"
  },
  {
    _id: uuid(),
    title: "Eye Liner",
    price: "1000",
    brand: "Lakme",
    image: "https://m.media-amazon.com/images/I/71vUqkUJw2L._SL1500_.jpg",
    categoryName: "casual",
    quantity: "0"
  },
  {
    _id: uuid(),
    title: "Foundation",
    price: "2000",
    brand: "L'Oréal",
    image: "https://m.media-amazon.com/images/I/51T4XeywimL._SY355_.jpg",
    categoryName: "no-makeup",
    quantity: "2"
  },
  {
    _id: uuid(),
    title: "Sunscreen",
    price: "1000",
    brand: "Lotus",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41RULg%2Bv2%2BL._SX300_SY300_QL70_ML2_.jpg",
    categoryName: "no-makeup",
    quantity: "2"
  },
  {
    _id: uuid(),
    title: "Concealer",
    price: "3000",
    brand: "MAC",
    image: "https://m.media-amazon.com/images/I/31JqZlVCjqL._SY450_.jpg",
    categoryName: "no-makeup",
    quantity: "2"
  },
];
