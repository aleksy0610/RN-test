import SInfo from "react-native-sensitive-info";
import Config from '../constants/config';

const Utils = {
  serverUrl: Config.API_URL.DEV
};

const validateEmail = (email) => {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regexEmail.test(email);
};

const validatePassword = (password) => {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&/,><\’:;|_~`])\S{8,99}$/;
  return regexPassword.test(password);
};

const formatDOB = (date) => {
  let datePieces = date.split("-");
  return `${datePieces[1]}/${datePieces[2]}/${datePieces[0]}`;
};

// Set token function for authentication
export function setToken(token) {
  return SInfo.setItem("token", token, {});
}

export function getToken() {
  return SInfo.getItem("token", {});
}

// Cards methods
export function initPaymentInfo() {
  const array = JSON.stringify({});
  return SInfo.setItem("cards", array, {});
}

export function updateListOfCards(newList) {
  const updated = JSON.stringify(newList);
  return SInfo.setItem("cards", updated, {});
}

export async function getPaymentInfo() {
  let list = await SInfo.getItem("cards", {});

  if (!list) {
    return null;
  }

  let listOfCards = JSON.parse(list);
  return listOfCards;
}

// isFirstTime methods, will async storage later

export function isFirstTime() {
  return SInfo.getItem("isFirstTime", {});
}

export function setIsFirstTime() {
  return SInfo.setItem("isFirstTime", "true", {});
}

export function deleteFirstTime() {
  return SInfo.deleteItem("isFirstTime", {});
}

const addProductItem = (products, item) => {
  const { product, friend, count } = item;
  const updateProducts = [...products];
  const i = updateProducts.findIndex(_item => _item.product.id === product.id);
  if (i > -1) {
    const updateItem = {
      product: product,
      count: updateProducts[i].count + count,
      friend: friend
    };
    updateProducts.splice(i, 1, updateItem);
  }
  else updateProducts.push(item);
  return updateProducts;
};

const removeProductItem = (products, item) => {
  const updateProducts = [...products];
  const { product, friend, count } = item;
  const i = updateProducts.findIndex(_item => _item.product.id === product.id);
  if (i > -1) {
    if (updateProducts[i].count > 1) {
      const updateItem = {
        product: product,
        friend: friend,
        count: updateProducts[i].count - 1
      };
      updateProducts.splice(i, 1, updateItem);
    } else {
      updateProducts.splice(i, 1);
    }
  }
  return updateProducts;
}

const totalAccountCal = (products) => {
  return products.length > 0 ? products.reduce((val, item) => val + item.price * item.count, 0) : 0;
};

const removeProduct = (products, index) => {
  const updateProducts = [...products];
  const i = updateProducts.findIndex(_item => _item.product.id === index);
  if (i > -1) {
    updateProducts.splice(i, 1);
  }
  return updateProducts
}

export { validateEmail, formatDOB, Utils, addProductItem, removeProductItem, totalAccountCal, removeProduct, validatePassword };
