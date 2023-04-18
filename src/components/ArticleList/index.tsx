import { getArticleList, removeArticleById } from "@/api/article";
import { getCategoryList } from "@/api/category";
import { useStore } from "@/store";
import { Article } from "@/types/Article";
import { EllipsisOutlined, PlusOutlined } from "@ant-design/icons";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Badge, Button, Dropdown, Space, Tag, Popconfirm, message } from "antd";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";
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

  const loadTableData = async () => {
    let res = await getArticleList(1, 10);
    articleStore.setArticleList(res);
  };

  useEffect(() => {
    loadTableData();
    (async () => {
      let res = await getCategoryList();
      categoryStore.setCategoryList(res);
    })();

    // userStore.category();
  }, []);

  const columns: ProColumns<Article>[] = [
    {
      title: "标题",
      dataIndex: "title",
      // copyable: true,
      ellipsis: true,
      hideInSearch: true,
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
      // disable: true,
      title: "分类",
      dataIndex: "categoryId",
      filters: true,
      onFilter: true,
      ellipsis: true,
      hideInSearch: true,
      // valueType: "select",
      render: (text, record) => {
        return <Tag color="blue">{id2name(record.categoryId)}</Tag>;
      },
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
        return <Badge count={row.viewCount} showZero color="#52c41a"></Badge>;
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
        <Popconfirm
          title="删除这篇文章"
          description="你真的要删除这篇文章吗?"
          onConfirm={() => {
            try {
              let articleId = record.id;
              let res = removeArticleById(articleId);
              message.success("删除成功");
              // 伪 刷新
              setTimeout(() => {
                loadTableData();
              }, 1000);
            } catch {}
          }}
          onCancel={() => {}}
          okText="是"
          cancelText="否"
        >
          <Button type="primary" danger size="small">
            删除
          </Button>
        </Popconfirm>,

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
      search={false}
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
