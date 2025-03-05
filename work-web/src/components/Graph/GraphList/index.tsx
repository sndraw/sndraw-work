import { MODE_ENUM } from '@/constants/DataMap';
import { ReloadOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Access, Outlet, useAccess, useModel } from '@umijs/max';
import { FloatButton, Input, Space } from 'antd';
import classNames from 'classnames';
import { useMemo, useState } from 'react';
import GraphSelect from '../GraphSelect';
import GraphWorkspaceSave, {
  GraphWorkSpaceActionEnum,
} from '../GraphWorkSpaceSave';
import GraphCard from './../GraphCard';
import styles from './index.less';
import { AI_GRAPH_PLATFORM_MAP } from '@/common/ai';

type GraphListPropsType = {
  mode?: MODE_ENUM;
  graph: string;
  changeGraph?: (graph: string) => void;
  dataList: any;
  loading: any;
  refresh: () => void;
  className?: string;
  children?: React.ReactNode;
};
const GraphList: React.FC<GraphListPropsType> = (props) => {
  const { getGraphInfo } = useModel('graphList');
  
  const [searchText, setSearchText] = useState<string>('' as string);
  const {
    mode = MODE_ENUM.VIEW,
    graph,
    changeGraph,
    dataList,
    loading,
    refresh,
    className,
  } = props;

  const filterData = useMemo(() => {
    if (!searchText) return dataList;
    return dataList?.filter((item: any) => item.name.includes(searchText));
  }, [dataList, searchText]);

  const graphInfo = getGraphInfo(graph);

  const access = useAccess();

  const canEdit = access.canSeeDev && mode === MODE_ENUM.EDIT;

  const isLoading = !!loading;

  return (
    <div className={classNames(styles.container, className)}>
      <ProList
        ghost={false}
        className={styles.cardList}
        headerTitle={
          <Space size={16} wrap>
            <GraphSelect
              title={'知识图谱'}
              graph={graph}
              changeGraph={changeGraph}
            />
            {/* 筛选空间 */}
            <Input.Search
              allowClear
              placeholder={'搜索图谱空间'}
              defaultValue={searchText}
              onSearch={(value: string) => {
                setSearchText(value);
              }}
            />
          </Space>
        }
        toolbar={{
          actions: [
            <FloatButton.Group key={'addGraphWorkspaceGroup'}>
              <Access accessible={canEdit} key="addGraphWorkspaceAccess">
                {graph && (
                  <GraphWorkspaceSave
                    graph={graph}
                    action={GraphWorkSpaceActionEnum.CREATE}
                    refresh={refresh}
                  />
                )}
              </Access>
              <FloatButton
                tooltip="刷新"
                icon={<ReloadOutlined />}
                key="refresh"
                onClick={() => {
                  refresh();
                }}
              ></FloatButton>
            </FloatButton.Group>,
          ],
        }}
        rowSelection={{}}
        itemCardProps={{
          ghost: false,
        }}
        grid={{
          gutter: [50, 25],
          column: 4,
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        loading={isLoading}
        dataSource={filterData}
        itemLayout="horizontal"
        renderItem={(item: any) => (
          <div className={styles.listItem} key={item?.id}>
            <GraphCard
              mode={mode}
              refresh={() => {
                refresh();
              }}
              key={item?.name}
              item={item}
            />
          </div>
        )}
      />
      <Outlet />
    </div>
  );
};

export default GraphList;
