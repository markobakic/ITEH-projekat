import { API_KEY_GOOGLE } from './api-key.constants';

const domain = 'http://localhost';
const port = '8000';

export const BASE_URL = `${domain}:${port}/api`;

export const SKI_CAT_ID = 1;
export const HELMET_CAT_ID = 2;
export const BOOT_CAT_ID = 3;

export const SKI_CAT_HEADING = 'SKIES';
export const HELMET_CAT_HEADING = 'HELMETS';
export const BOOT_CAT_HEADING = 'SKI BOOTS';
export const ALL_PRODUCTS_HEADING = 'ALL PRODUCTS';

export const API_KEY = API_KEY_GOOGLE;

export const SORT = {
  priceAsc: 'PRICE_ASC',
  priceDesc: 'PRICE_DESC',
  nameAsc: 'NAME_ASC',
  nameDesc: 'NAME_DESC',
};

export const PAYMENT = {
  cash: 'CASH',
  card: 'CARD',
};
