import { MODE_ENUM } from '@/constants/DataMap';
import useHeaderHeight from '@/hooks/useHeaderHeight';
import { ReloadOutlined } from '@ant-design/icons';
import { useAccess } from '@umijs/max';
import { Divider, Flex, FloatButton, Space, Spin, Switch } from 'antd';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import GraphMap from '../GraphMap';
import styles from './index.less';

type GraphDisplayPropsType = {
  mode?: MODE_ENUM;
  graph: string;
  workspace: string;
  graphData: any;
  loading: any;
  refresh: () => void;
  className?: string;
  children?: React.ReactNode;
};
const GraphDisplay: React.FC<GraphDisplayPropsType> = (props) => {
  const {
    mode = MODE_ENUM.VIEW,
    graph,
    workspace,
    graphData,
    loading,
    refresh,
    className,
  } = props;

  const access = useAccess();
  const [displayMode, setDisplayMode] = useState<'2d' | '3d'>('2d');

  const headerHeight = useHeaderHeight();
  const containerStyle = useCallback(() => {
    return {
      height: `calc(100vh - ${headerHeight + 10}px)`,
    };
  }, [headerHeight]);

  const canEdit = access.canSeeDev && mode === MODE_ENUM.EDIT;
  return (
    <Spin spinning={loading}>
      <div
        className={classNames(styles.container, className)}
        style={containerStyle()}
      >
        <Flex className={styles.graphHeader} wrap>
          <Space size={0} wrap className={classNames(styles.graphTitle)}>
            <Space size={16} wrap className={styles.chatTags}>
              {graph}
            </Space>
            <Divider type="vertical" />
            <Space size={0} wrap className={styles.chatTitle}>
              <span>{workspace}</span>
            </Space>
            {/* 设置2d,3d */}
            <Divider type="vertical" />
            <Switch
              checkedChildren="3D"
              unCheckedChildren="2D"
              checked={displayMode === '3d'}
              onChange={(checked) => {
                setDisplayMode(checked ? '3d' : '2d');
              }}
            />
          </Space>
          <FloatButton.Group className={styles?.graphGroupBtns}>
            {/* <Access accessible={canEdit}>
              <DocumentInput
                graph={graph}
                disabled={loading}
                refresh={() => {
                  refresh?.();
                }}
              />
            </Access> */}
            <FloatButton
              tooltip="刷新"
              icon={<ReloadOutlined />}
              key="refresh"
              onClick={() => refresh()}
            ></FloatButton>
          </FloatButton.Group>
        </Flex>
        <GraphMap
          className={styles.graphMap}
          displayMode={displayMode}
          graph={graph}
          workspace={workspace}
          graphData={graphData}
          refresh={refresh}
        />
      </div>
    </Spin>
  );
};

export default GraphDisplay;
