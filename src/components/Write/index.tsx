import { Button, Card, Col, Input, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./styles.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ArticleCategory from "../ArticleCategory";
import { useStore } from "@/store";
import { observer } from "mobx-react";
import { createArticle } from "@/api/article";

const view: React.FC = () => {
  const { articleStore } = useStore();
  const publishArticle = () => {
    let cid = articleStore.currentId;
    let title = articleStore.currentTitle;
    let content = articleStore.currentContent;
    createArticle(title,content,cid);
  };
  return (
    <>
      <Card>
        <Row>
          <Col span={24}></Col>
        </Row>
        <Row>
          <Col span={3}>
            <ArticleCategory></ArticleCategory>
          </Col>
          <Col span={1}></Col>
          <Col span={17}>
            <Input
              placeholder="文章标题"
              onChange={(e) => articleStore.setCurrentTitle(e.target.value)}
            ></Input>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <Button type="primary" onClick={() => publishArticle()}>
              发布
            </Button>
          </Col>
        </Row>
      </Card>

      <Card>
        <Row>
          <Col span={12}>
            <textarea
              className="editor"
              onChange={(e) => articleStore.setCurrentContent(e.target.value)}
              value={articleStore.currentContent}
            ></textarea>
          </Col>
          <Col span={12}>
            <div>
              <ReactMarkdown
                className="editor-render"
                children={articleStore.currentContent}
              ></ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default observer(view);
