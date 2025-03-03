import useHeaderHeight from '@/hooks/useHeaderHeight';
import { ReloadOutlined } from '@ant-design/icons';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Divider, Input, Space, Tag, Typography } from 'antd';
import classNames from 'classnames';
import { Key, useCallback, useRef, useState } from 'react';
import LinkDelete from '../GraphMap/LinkPanel/LinkDelete';
import LinkEdit from '../GraphMap/LinkPanel/LinkEdit';
import NodeDelete from '../GraphMap/NodePanel/NodeDelete';
import NodeEdit from '../GraphMap/NodePanel/NodeEdit';
import { formatText } from '../GraphMap/utils';
import styles from './index.less';
const { Title, Paragraph, Text } = Typography;

type GraphTablePropsType = {
  title?: string;
  // 当前graph
  graph: string;
  // 当前workspace
  workspace: string;
  // 数据列表
  dataList: any;
  // loading状态
  loading: boolean;
  // 刷新
  refresh: () => void;
  className?: string;
};
const GraphTable: React.FC<GraphTablePropsType> = (props) => {
  const {
    title,
    graph,
    workspace,
    dataList,
    loading,
    refresh,
    className,
  } = props;
  // 展开row的key数组
  const [expandedKeys, setExpandedKeys] = useState<readonly Key[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [searchText, setSearchText] = useState<string>('' as string);

  const listRef = useRef<any>(null);
  const headerHeight = useHeaderHeight();

  const filterNodes = (dataList: any[], searchText: string): any[] => {
    return dataList.filter((item: any) =>
      item?.label?.toLowerCase()?.includes(searchText?.toLowerCase()),
    );
  };

  const columns: ProColumns<any>[] = [
    {
      title: '序号',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: '节点',
      dataIndex: 'label',
      key: 'label',
      render: (text, row) => {
        return <span>{formatText(row.label)}</span>
      },
    },
    {
      title: "类型",
      dataIndex: "entity_type",
      key: "entity_type",
      render: (text, row) => {
        return <Tag>{formatText(row?.entity_type || '未知')}</Tag>
      }
    },
    {
      title: '关联节点',
      dataIndex: 'edge',
      key: 'edge',
      render: (text, row) => {
        if (!row?.edge) {
          return <></>;
        }
        return (
          <Space direction="horizontal" wrap className={styles.edgeInfoItem}>
            <span>
              <label>关联节点：</label>
              <Tag
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSearchText(formatText(row?.edge?.target));
                }}
                color="processing"
              >
                {formatText(row?.edge?.target)}
              </Tag>
            </span>
            <LinkEdit
              graph={graph}
              workspace={workspace}
              link={row.edge}
              refresh={() => {
                // setVisible(false);
                refresh?.();
              }}
              disabled={loading}
            />
            <LinkDelete
              graph={graph}
              workspace={workspace}
              link={row.edge}
              refresh={() => {
                // setVisible(false);
                refresh?.();
              }}
              disabled={loading}
            />
          </Space>
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: (text, row) => {
        return (
          <div>
            <NodeEdit
              graph={graph}
              workspace={workspace}
              node={row}
              refresh={() => {
                // setVisible(false);
                refresh?.();
              }}
              disabled={loading}
            />
            <NodeDelete
              graph={graph}
              workspace={workspace}
              node={row}
              refresh={() => {
                refresh?.();
              }}
              disabled={loading}
            />
          </div>
        );
      },
    },
  ];

  // 计算样式
  const containerStyle = useCallback(() => {
    return {
      height: `calc(100vh - ${headerHeight + 40}px)`,
    };
  }, [headerHeight]);

  // 请求加载状态
  return (
    <div
      ref={containerRef}
      className={classNames(styles.container, className)}
      style={containerStyle()}
    >
      <Space ref={titleRef} size={0} wrap className={styles.header}>
        <Space size={0} wrap className={styles.documentTags}>
          <span>{graph}</span>
        </Space>
        <Divider type="vertical" />
        <Space size={0} wrap className={styles.documentTitle}>
          <span>{workspace}</span>
        </Space>
        <Divider type="vertical" />
        {/* 筛选节点 */}
        <Input.Search
          allowClear
          placeholder={'搜索节点'}
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);
          }}
        />
        <>
          {/* 刷新 */}
          <Button
            className={styles.refreshButton}
            title="刷新"
            icon={<ReloadOutlined />}
            key="refresh"
            onClick={() => {
              refresh?.();
            }}
          ></Button>
        </>
      </Space>

      <ProTable<any>
        actionRef={listRef}
        className={styles.tableWrapper}
        loading={loading}
        rowKey={'id'}
        dataSource={filterNodes(dataList, searchText)}
        rowClassName={styles.rowItem}
        search={false}
        options={false}
        showHeader={false}
        // virtual={true}
        // scroll={{ y: 300, x: "100%", scrollToFirstRowOnChange: false }}
        expandable={{
          columnWidth: 30,
          expandedRowKeys: expandedKeys,
          onExpandedRowsChange: setExpandedKeys,
          expandedRowRender: (row) => {
            return (
              <Typography
                className={styles.expandedRow}
              >
                {/* 其他信息展示 */}
                <div className={styles?.nodeInfoItem}>
                  <label className={styles?.nodeLabel}>描述：</label>
                  <span className={styles?.nodeDescription}>{formatText(row?.description || '')}</span>
                </div>
                <div className={styles?.nodeInfoItem}>
                  <label className={styles?.nodeLabel}>来源：</label>
                  <span className={styles?.nodeDescription}>{formatText(row?.source_id || '')}</span>
                </div>
              </Typography>
            );
          },
          rowExpandable: (record) => record.label,
        }}
        columns={columns}
        pagination={{
          style: {
            position: 'fixed',
            bottom: '10px',
            right: '30px',
          },
          size: 'small',
          pageSize: 10,
          showSizeChanger: true,
          total: dataList?.length,
        }}
      />
    </div>
  );
};

export default GraphTable;
