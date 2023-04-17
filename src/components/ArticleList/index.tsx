import { getArticleList } from "@/api/article";
import { getCategoryList } from "@/api/category";
import { useStore } from "@/store";
import { Article } from "@/types/Article";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Badge, Button, Dropdown, Space, Tag } from "antd";
import { observer } from "mobx-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const view = () => {
  const actionRef = useRef<ActionType>();
  const { articleStore, categoryStore } = useStore();

  const id2name = (id: string) => {
    let item = categoryStore.categoryList.filter((item) => item.id == id)[0];
    console.log(item);
    return item.name;
  };
  const navigateTo = useNavigate();

  useEffect(() => {
    getArticleList(1, 10).then((res) => {
      articleStore.setArticleList(res);
    });
    (async () => {
      let res = await getCategoryList();
      categoryStore.setCategoryList(res);
    })();

    // userStore.category();
  }, []);

  const columns: ProColumns<Article>[] = [
    {
      dataIndex: "index",
      valueType: "indexBorder",
      width: 48,
    },
    {
      title: "标题",
      dataIndex: "title",
      // copyable: true,
      ellipsis: true,
      tip: "文章标题",
      formItemProps: {
        rules: [
          {
            required: true,
            message: "此项为必填项",
          },
        ],
      },
    },
    {
      disable: true,
      title: "分类",
      dataIndex: "categoryId",
      filters: true,
      onFilter: true,
      ellipsis: true,
      // valueType: "select",
      render: (text, record) => {
        return <Tag color="green">{id2name(record.categoryId)}</Tag>;
      },
      valueEnum: categoryStore.categoryList.reduce((obj: any, { id, name }) => {
        obj[id] = name;
        return obj;
      }, {}),
    },
    // {
    //   disable: true,
    //   title: "标签",
    //   dataIndex: "labels",
    //   search: false,
    //   renderFormItem: (_, { defaultRender }) => {
    //     return defaultRender(_);
    //   },
    //   render: (_, record) => (
    //     <Space>
    //       {/* {record.labels.map(({ name, color }) => ( */}
    //       {/* <Tag color={color} key={name}> */}

    //       {/* {name} */}
    //       {/* </Tag> */}
    //       {/* ))} */}
    //     </Space>
    //   ),
    // },
    {
      title: "浏览量",
      key: "view_count",
      dataIndex: "viewCount",
      hideInSearch: true,
      render: (text, row) => {
        return <Badge count={row.viewCount} showZero></Badge>;
      },
    },
    {
      title: "操作",
      valueType: "option",
      key: "option",
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          href={record.url}
          target="_blank"
          rel="noopener noreferrer"
          key="view"
        >
          查看
        </a>,
        // <TableDropdown
        //   key="actionGroup"
        //   onSelect={() => action?.reload()}
        //   menus={[
        //     { key: "copy", name: "复制" },
        //     { key: "delete", name: "删除" },
        //   ]}
        // />,
      ],
    },
  ];

  return (
    <ProTable<Article>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      dataSource={articleStore.articleList.data}
      editable={{
        type: "multiple",
      }}
      columnsState={{
        persistenceKey: "pro-table-singe-demos",
        persistenceType: "localStorage",
        onChange(value) {
          console.log("value: ", value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: "auto",
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === "get") {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        total: articleStore.articleList.total,
        pageSize: 10,
        onChange: (page) => {
          getArticleList(page, 10).then((res) => {
            articleStore.setArticleList(res);
          });
        },
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
            navigateTo("/write");
          }}
          type="primary"
        >
          新建文章
        </Button>,
      ]}
    />
  );
};

export default observer(view);
