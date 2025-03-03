import LmList from '@/components/Lm/LmList';
import { MODE_ENUM } from '@/constants/DataMap';
import ROUTE_MAP from '@/routers/routeMap';
import { queryAllAILmList } from '@/services/common/ai/lm';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation, useModel, useNavigate, useRequest } from '@umijs/max';
import { useEffect, useState } from 'react';
import styles from './index.less';

const AILmManagePage: React.FC = () => {
  const { name } = useModel('global');
  const navigate = useNavigate();
  const location = useLocation();
  const { platform } = (location?.state as any) || {};
  const [initPlatform, setInitPlatform] = useState<string>();

  // 模型列表-请求
  const { data, loading, run } = useRequest(
    () => {
      return queryAllAILmList({
        platform,
      });
    },
    {
      manual: true,
    },
  );
  useEffect(() => {
    if (initPlatform) {
      navigate(ROUTE_MAP?.AI_LM_MANAGE, {
        replace: true,
        state: {
          platform: initPlatform,
        },
      });
    }
  }, [initPlatform]);
  return (
    <PageContainer ghost title={false}>
      <LmList
        mode={MODE_ENUM.EDIT}
        className={styles.container}
        platform={platform}
        setInitPlatform={setInitPlatform}
        dataList={data?.list}
        loading={loading}
        refresh={run}
      />
    </PageContainer>
  );
};

export default AILmManagePage;
