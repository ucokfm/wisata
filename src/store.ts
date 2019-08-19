import { observable } from 'mobx';

class AppStore {
  @observable cities = {
    denpasar: {
      price: 1000000,
      count: 3500,
    },
    medan: {
      price: 500000,
      count: 1200,
    },
    jakarta: {
      price: 750000,
      count: 5000,
    },
    bandung: {
      price: 650000,
      count: 2500,
    },
    surabaya: {
      price: 350000,
      count: 800,
    },
  }

  @observable guests = [
    { name: 'budi', message: 'hey' }
  ];
}

export const appStore = new AppStore();
