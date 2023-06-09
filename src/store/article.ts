/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-16 13:17:17
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-23 00:49:16
 * @FilePath: /general-antd-MS-tempalte/src/store/article.ts
 * @Description:
 *
 */
import { Article, Tag } from "@/types/Article";
import { ArticleList } from "@/types/ArticleList";
import { EditMode } from "@/types/EditMode";
import { http } from "@/utils";
import { makeAutoObservable } from "mobx";

export default class ArticleStore {
  articleList: ArticleList = {} as ArticleList;
  currentCid: string = "";
  currentId: string = "";
  currentContent: string = "";
  currentTitle: string = "";
  editorMode: EditMode = EditMode.Create; // 默认创建模式
  tags: Tag[] = [];
  selectedTags: Tag[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  // 设置文章列表
  setArticleList = async (lst: ArticleList) => {
    this.articleList = lst;
  };

  // 设置文章ID
  setCurrentId = async (id: string) => {
    this.currentId = id;
  };

  // 设置文章分类ID
  setCurrentCid = async (id: string) => {
    this.currentCid = id;
  };

  // 设置当前内容
  setCurrentContent = async (c: string) => {
    this.currentContent = c;
  };
  // 设置当前标题
  setCurrentTitle = async (t: string) => {
    this.currentTitle = t;
  };

  // 设置编辑器模式
  setEditorMode = (e: EditMode) => {
    this.editorMode = e;
  };

  // 清空编辑器
  clearEditor = () => {
    this.currentCid = "";
    this.currentContent = "";
    this.currentCid = "";
    this.currentTitle = "";
    this.editorMode = EditMode.Create;
  };

  // 设置 标签
  setTags = async (tags: Tag[]) => {
    this.tags = tags;
  };

  // 选中标签
  setSelectedTag = async (tag: Tag[]) => {
    this.selectedTags = tag;
  };
}
