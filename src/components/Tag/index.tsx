/*
 * @Author: luzhenfang 1318659507@qq.com
 * @Date: 2023-04-22 21:25:37
 * @LastEditors: luzhenfang 1318659507@qq.com
 * @LastEditTime: 2023-04-22 23:50:39
 * @FilePath: /general-antd-MS-tempalte/src/components/Tag/index.tsx
 * @Description: 文章标签组件
 *
 */
import { getArticleTags } from "@/api/tags";
import { useStore } from "@/store";
import { Select, Tag, Tooltip } from "antd";
import { observer } from "mobx-react";
import { useEffect } from "react";
import "./style.scss";

const view = () => {
  const { articleStore } = useStore();
  const options = [
    { value: "gold" },
    { value: "lime" },
    { value: "green" },
    { value: "cyan" },
  ];
  useEffect(() => {
    (async () => {
      let res = await getArticleTags();
      articleStore.setTags(res);
      console.log(res);
    })();
  }, []);

  return (
    <>
      <Select
        mode="multiple"
        className="random-color"
        defaultValue={articleStore.tags.map((item) => item.name)}
        style={{ width: "100%" }}
        placeholder="文章分类"
        options={articleStore.tags.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })}
        onChange={(v) => {
          //   articleStore.setCurrentCid(v);
        }}
        tagRender={(props) => {
          const { label, value, closable, onClose } = props;
          const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
          return (
            <>
              <Tooltip title={label}>
                <Tag color={randomColor} closable={closable} onClose={onClose}>
                  {label}
                </Tag>
              </Tooltip>
            </>
          );
        }}
      ></Select>
    </>
  );
};

export default observer(view);
