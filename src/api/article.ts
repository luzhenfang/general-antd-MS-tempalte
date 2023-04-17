import { Article } from "@/types/Article";
import { http } from "@/utils";

export const getArticleList = async (page: number, size: number) => {
  let res = await http.get("/api/v1/article", {
    params: { page: page, size: size },
  });
  return res.data;
};

// 创建一篇文章
export const createArticle = async (
  title: string,
  content: string,
  categoryId: number
) => {
  let res = await http.post("/api/v1/article", {
    title: title,
    content: content,
    categoryId: categoryId,
  });
  console.log(res.data);
  return res;
};
