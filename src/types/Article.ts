/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-17 17:16:43
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-22 20:59:14
 * @FilePath: /general-antd-MS-tempalte/src/types/Article.ts
 * 
 */

export interface Tag{
  name:string
}

export interface Article {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  viewCount: number;
  commentCount: number;
  tags:Tag[];
}
