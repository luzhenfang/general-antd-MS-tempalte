/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-16 21:10:52
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-06 12:12:11
 * @FilePath: /general-antd-MS-tempalte/src/views/WriteArticle.tsx
 * @Description:
 *
 */
import Write from "@/components/MarkdownEditor";
import Tag from "@/components/ArticleTag";
import ArticleTag from "@/components/ArticleTag";
import { Col, Row, Watermark } from "antd";

export default () => {
  return (
    <>
      {/* <Watermark content={["neo-blog", "luzhenfang"]} gap={[200, 200]}> */}
      {/* 标签区 */}
      <Row>
        <Col span={24}>
          <ArticleTag></ArticleTag>
        </Col>
        <Col span={24}>
          {/* 写作区 */}
          <Write></Write>
        </Col>
      </Row>
      {/* </Watermark> */}
    </>
  );
};
