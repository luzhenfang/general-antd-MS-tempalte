import { makeAutoObservable } from "mobx";

export default class CategoryStore {
  categoryList: Array<Category> = [];
  constructor() {
    makeAutoObservable(this);
  }
  setCategoryList = (c: Array<Category>) => {
    this.categoryList = c;
  };
}
