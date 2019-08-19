import { observable } from 'mobx';

class AppStore {
  @observable guests = [
    { name: 'budi', message: 'hey' }
  ];
}

export const appStore = new AppStore();
