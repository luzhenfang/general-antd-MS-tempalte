import DataCard from "@/components/Card";
import { Button, Card, Col, Row, Space } from "antd";
import MindList from "@/components/MindList";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";

const Page: React.FC = () => {
  return (
    <Row style={{ margin: 30 }}>
      <Col span={24}>
        <Row gutter={[16, 0]}>
          <Col span={6}>
            <DataCard title="文章" value={200}></DataCard>
          </Col>
          <Col span={6}>
            <DataCard title="评论" value={1000}></DataCard>
          </Col>
          <Col span={6}>
            <DataCard title="阅读" value={300}></DataCard>
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
export default Page;
