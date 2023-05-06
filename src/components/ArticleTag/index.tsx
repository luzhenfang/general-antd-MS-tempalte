/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-22 21:25:37
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-05-06 11:59:05
 * @FilePath: /general-antd-MS-tempalte/src/components/ArticleTag/index.tsx
 * @Description: 文章标签组件
 *
 */
import { getArticleTags } from "@/api/tags";
import { useStore } from "@/store";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Select,
  Spin,
  Tag,
  Tooltip,
} from "antd";
import { observer } from "mobx-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./style.scss";

// const temp = ()=>{
//   return (
//     <>
//       <Select
//         mode="tags"
//         defaultValue={articleStore.tags.map((item) => {
//           return {
//             label: item.name,
//             value: item.id,
//           };
//         })}
//         style={{ width: "100%" }}
//         placeholder="文章标签"
//         options={articleStore.tags.map((item) => {
//           return {
//             label: item.name,
//             value: item.id,
//           };
//         })}
//         tagRender={(props) => {
//           const { label, value, closable, onClose } = props;
//           const randomColor = useMemo(() => {
//             const min = 0;
//             const max = 254;
//             let r = Math.floor(Math.random() * (max - min + 1)) + min;
//             let g = Math.floor(Math.random() * (max - min + 1)) + min;
//             let b = Math.floor(Math.random() * (max - min + 1)) + min;
//             // 如果生成的随机颜色是白色，则重新生成
//             while (r === 255 && g === 255 && b === 255) {
//               r = Math.floor(Math.random() * (max - min + 1)) + min;
//               g = Math.floor(Math.random() * (max - min + 1)) + min;
//               b = Math.floor(Math.random() * (max - min + 1)) + min;
//             }
//             return `rgb(${r},${g},${b})`;
//           }, []);
//           return (
//             <>
//               <Tooltip title={label}>
//                 <Tag color={randomColor} closable={closable} onClose={onClose}>
//                   {label}
//                 </Tag>
//               </Tooltip>
//             </>
//           );
//         }}
//       ></Select>
//     </>
//   );
// }

const ColorTag = ({ title }: { title: string }) => {
  // const randomColor = useMemo(() => {
  //   const min = 0;
  //   const max = 254;
  //   let r = Math.floor(Math.random() * (max - min + 1)) + min;
  //   let g = Math.floor(Math.random() * (max - min + 1)) + min;
  //   let b = Math.floor(Math.random() * (max - min + 1)) + min;
  //   // 如果生成的随机颜色是白色，则重新生成
  //   while (r === 255 && g === 255 && b === 255) {
  //     r = Math.floor(Math.random() * (max - min + 1)) + min;
  //     g = Math.floor(Math.random() * (max - min + 1)) + min;
  //     b = Math.floor(Math.random() * (max - min + 1)) + min;
  //   }
  //   return `rgb(${r},${g},${b})`;
  // }, []);

  const randomColor = useMemo(() => {
    const colors: string[] = [
      "magenta",
      "red",
      "volcano",
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple",
    ];

    const seed = new Date().getTime(); // 获取当前时间戳作为种子
    const randomIndex = Math.floor(Math.random() * colors.length * seed);

    return colors[randomIndex % colors.length];
  }, []);

  return (
    <Tooltip title={title}>
      <Tag className="m-1.5" color={randomColor}>
        {title}
      </Tag>
    </Tooltip>
  );
};

const view = () => {
  const { articleStore } = useStore();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let res = await getArticleTags();
      articleStore.setTags(res);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Row gutter={20}>
        <Col span={14}>
          <Card className="text-sm font-900" title="添加标签">
            <Form layout="vertical">
              <Form.Item label="名称" name="tagName" required>
                <Input></Input>
              </Form.Item>
              <Form.Item>
                <Button type="primary">保存</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="所有标签">
            <Spin spinning={loading}>
              {articleStore.tags.map((item) => {
                return <ColorTag title={item.name}></ColorTag>;
              })}
            </Spin>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default observer(view);
