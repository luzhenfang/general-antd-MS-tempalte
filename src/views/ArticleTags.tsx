import ArticleTag from "@/components/ArticleTag";
import { observer } from "mobx-react";

/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-23 00:52:31
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-05 22:00:09
 * @FilePath: /general-antd-MS-tempalte/src/views/ArticleTags.tsx
 * @Description: 分类标签页面
 *
 */
const view: React.FC = () => {
  return (
    <>
      <ArticleTag></ArticleTag>
    </>
  );
};

export default observer(view);
