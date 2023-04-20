import { Button, Card, Col, Input, Row, Space, message } from "antd";
import { useEffect, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./styles.scss";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ArticleCategory from "../ArticleCategory";
import { useStore } from "@/store";
import { observer } from "mobx-react";
import { createArticle, updateArticle } from "@/api/article";
import { useNavigate } from "react-router-dom";
import { EditMode } from "@/types/EditMode";
import Article from "@/views/Article";

const view: React.FC = () => {
  const { articleStore } = useStore();
  const navigateTo = useNavigate();
  const publishArticle = async () => {
    let cid = articleStore.currentCid;
    let title = articleStore.currentTitle;
    let content = articleStore.currentContent;

    let methodMap = new Map<number, Function>();
    methodMap.set(EditMode.Create, async () => {
      await createArticle(title, content, cid);
      message.success("发布文章成功");
      setTimeout(() => {
        navigateTo("/articleList");
      }, 1000);
    });

    methodMap.set(EditMode.Update, async () => {
      await updateArticle({
        id: articleStore.currentId,
        content: articleStore.currentContent,
        title: articleStore.currentTitle,
        categoryId: articleStore.currentCid,
      });
      message.success("修改文章成功");
      setTimeout(() => {
        navigateTo("/articleList");
      }, 1000);
    });

    try {
      let fn = methodMap.get(articleStore.editorMode);
      await fn!();
      articleStore.clearEditor();
    } catch (e) {}
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
              value={articleStore.currentTitle}
              onChange={(e) => articleStore.setCurrentTitle(e.target.value)}
            ></Input>
          </Col>
          <Col span={1}></Col>
          <Col span={2}>
            <Button type="primary" onClick={() => publishArticle()}>
              {articleStore.editorMode === EditMode.Create ? "发布" : "更新"}
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
