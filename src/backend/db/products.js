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
    brand: "Lakme",
    image: "https://m.media-amazon.com/images/I/61AMPLdlUkL._SL1000_.jpg",
    categoryName: "party",
    quantity: "2"
  },
  {
    _id: uuid(),
    title: "Eye Liner",
    price: "1000",
    brand: "Lakme",
    image: "https://m.media-amazon.com/images/I/61AMPLdlUkL._SL1000_.jpg",
    categoryName: "casual",
    quantity: "0"
  },
];
