/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-03 18:13:36
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-01 21:23:34
 * @FilePath: /general-antd-MS-tempalte/src/views/DashBoard.tsx
 * @Description:
 *
 */
import DataCard from "@/components/Card";
import { Button, Card, Col, Row, Space } from "antd";
import MindList from "@/components/MindList";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import { useStore } from "@/store";
import { useEffect } from "react";
import { observer } from "mobx-react";
import { getArticleList } from "@/api/article";
import { getCategoryList } from "@/api/category";

const Page: React.FC = () => {
  const { categoryStore, articleStore } = useStore();
  useEffect(() => {
    (async () => {
      let res = await getArticleList(1, 10);
      articleStore.setArticleList(res);
      let c_list = await getCategoryList();
      categoryStore.setCategoryList(c_list);
    })();
    // userStore.category();
  }, []);
  return (
    <Row style={{ margin: 30 }}>
      <h2 className="bg-sky-900 aspect-square">这是关于组</h2>
      <Col span={24}>
        <Row gutter={[16, 0]}>
          <Col span={6}>
            <DataCard
              title="文章"
              value={articleStore.articleList.total}
            ></DataCard>
          </Col>
          <Col span={6}>
            <DataCard
              title="分类"
              value={categoryStore.categoryList.length}
            ></DataCard>
          </Col>
          <Col span={6}>
            {/* toto: 用户访问次数 */}
            <DataCard title="访问" value={300}></DataCard>
          </Col>
          <Col span={6}>
            <DataCard title="建立天数" value={20}></DataCard>
          </Col>
        </Row>
        <Row gutter={[50, 30]} style={{ padding: "20px 0" }}>
          <Col span={8}>
            <Card>
              <Title level={4}>速记</Title>
              <TextArea
                showCount
                maxLength={150}
                style={{ height: 220, resize: "none" }}
                onChange={() => {}}
                placeholder="disable resize"
              />
              <br />
              <Button type="primary">发布</Button>
            </Card>
          </Col>
          <Col span={16}>
            <MindList></MindList>
          </Col>
          <Col span={1}></Col>
        </Row>
      </Col>
    </Row>
  );
};
export default observer(Page);
