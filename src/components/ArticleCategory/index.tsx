import { getCategoryList } from "@/api/category";
import { useStore } from "@/store";
import { Select } from "antd";
import { observer } from "mobx-react";
import { useEffect } from "react";

const view = () => {
  const { categoryStore, articleStore } = useStore();
  useEffect(() => {
    (async () => {
      let res = await getCategoryList();
      categoryStore.setCategoryList(res);
      console.log(res);
    })();
  }, []);

  return (
    <Select
      style={{ width: "100%" }}
      placeholder="文章分类"
      options={categoryStore.categoryList.map((item) => {
        return { label: item.name, value: item.id };
      })}
      onChange={(v) => {
        articleStore.setCurrentArticleId(v);
      }}
    ></Select>
  );
};

export default observer(view);
