import { Article } from "@/types/Article";
import { ArticleList } from "@/types/ArticleList";
import { http } from "@/utils";
import { makeAutoObservable } from "mobx";

export default class ArticleStore {
  articleList: ArticleList = {} as ArticleList;
  currentId: number = 0;
  currentContent: string = "";
  currentTitle: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  setArticleList = async (lst: ArticleList) => {
    this.articleList = lst;
  };

  setCurrentArticleId = async (id: number) => {
    this.currentId = id;
  };

  setCurrentContent = async (c: string) => {
    this.currentContent = c;
  };
  setCurrentTitle = async (t: string) => {
    this.currentTitle = t;
  };
}
