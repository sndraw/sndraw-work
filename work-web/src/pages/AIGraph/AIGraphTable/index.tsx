import GraphTable from '@/components/Graph/GraphTable';
import Page404 from '@/pages/404';
import { getGraphData } from '@/services/common/ai/graph';
import { useParams, useRequest } from '@umijs/max';
import { useEffect, useMemo } from 'react';
import styles from './index.less';
const AIGraphTablePage: React.FC = () => {
  const { graph, workspace } = useParams();

  // 模型数据-请求
  const { data, loading, run } = useRequest(
    () => {
      return getGraphData({
        graph: graph || '',
        workspace: workspace || '',
      });
    },
    {
      manual: true,
    },
  );

  useEffect(() => {
    if (graph && workspace) {
      run();
    }
  }, [graph, workspace]);

  const filterNodes = useMemo(() => {
    const { nodes, edges } = data || {};
    if (!nodes) return [];
    const newNodes = nodes.map((node: any, index: number) => {
      const edge = edges?.find((edge: any) => {
        return edge.source === node.id;
      });
      return {
        ...node,
        num: (index + 1).toString().padStart(2, '0'),
        edge,
      };
    });
    return newNodes;
  }, [data]);

  if (!graph || !workspace) {
    return <Page404 title={'非法访问'} />;
  }
  return (
    <GraphTable
      className={styles.pageContainer}
      graph={graph}
      workspace={workspace}
      dataList={filterNodes}
      loading={loading}
      refresh={run}
    ></GraphTable>
  );
};

export default AIGraphTablePage;
