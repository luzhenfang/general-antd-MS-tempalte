import { http } from "@/utils";

/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-22 21:29:37
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-22 23:18:40
 * @FilePath: /general-antd-MS-tempalte/src/api/tags.ts
 * @Description: 文章标签相关
 *
 */
export const getArticleTags = async () => {
  let res = (await http.get("/api/v1/tags")).data;
  return res.data;
};
