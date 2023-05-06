/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-17 16:47:14
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-06 12:12:55
 * @FilePath: /general-antd-MS-tempalte/src/api/article.ts
 * @Description:
 *
 */
import { Article } from "@/types/Article";
import { http } from "@/utils";

export const getArticleList = async (page: number, size: number) => {
  let res = await http.get("/api/v1/article", {
    params: { page: page, size: size },
  });
  console.log(res.data);
  return res.data;
};

// 创建一篇文章
export const createArticle = async (
  title: string,
  content: string,
  categoryId: string
) => {
  let res = await http.post("/api/v1/article", {
    title: title,
    content: content,
    categoryId: categoryId,
  });
  console.log(res.data);
  return res;
};

// 删除一篇文章
export const removeArticleById = async (id: string) => {
  let res = await http.delete(`/api/v1/article/${id}`);
  console.log(res);
};

// 更新一篇文章
export const updateArticle = async (a: any) => {
  let res = await http.put(`/api/v1/article/`, {
    ...a,
  });
  console.log(res);
};

// 添加文章标签

export const createTag = async (name: string) => {
  let res = await http.post("/api/v1/tags", {
    name,
  });
  console.log(res);
};
