import { updateGraphLink } from '@/services/common/ai/graph';
import { EditOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Form } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';

interface LinkEditProps {
  graph: string;
  workspace: string;
  link: any;
  refresh?: () => void;
  disabled: boolean;
  className?: string;
}

const LinkEdit: React.FC<LinkEditProps> = (props) => {
  const { graph, workspace, link, refresh, disabled, className } = props;
  const [form] = Form.useForm<API.AIGraphLinkVO>();
  // 操作状态管理
  const { operation, setOperation } = useModel('graphOperation');

  const [loading, setLoading] = useState(false);

  const getDefaultValues = (link: API.AIGraphLinkVO) => {
    return {
      id: link?.id,
      weight: link?.weight,
      keywords: link?.keywords,
      description: link?.description,
      source_id: link?.source_id,
    };
  };

  const handleEdit = async (values: any) => {
    setLoading(true);
    try {
      await updateGraphLink(
        {
          graph: graph,
          workspace: workspace,
          link_id: link.id,
        },
        {
          weight: values?.weight,
          keywords: values?.keywords,
          description: values?.description,
          source_id: link?.source_id,
        },
      ).then((response) => {
        if (operation && response?.data) {
          operation.link = response?.data || {};
          setOperation(operation);
        }
        refresh?.();
      });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = disabled || loading;
  return (
    <ModalForm
      title={`编辑节点关系`}
      trigger={
        <Button
          className={classNames(className)}
          title="编辑节点关系"
          icon={<EditOutlined />}
          type="text"
          loading={loading}
          disabled={isDisabled}
        ></Button>
      }
      modalProps={{ destroyOnClose: true }}
      disabled={isDisabled}
      form={form}
      onOpenChange={(open) => {
        if (!open) {
          // form.resetFields();
        } else {
          form.setFieldsValue(getDefaultValues(link));
        }
      }}
      onFinish={async (values) => {
        const validate = await form.validateFields();
        if (!validate) {
          return false;
        }
        const isSuccess = await handleEdit(values);
        if (!isSuccess) {
          return false;
        }
        refresh?.();
        return true;
      }}
    >
      <ProFormText
        name="id"
        label="ID"
        rules={[
          {
            required: true,
            message: '请输ID',
          },
          {
            min: 1,
            max: 64,
            message: 'ID长度为1到64字符',
          },
        ]}
        placeholder="请输入ID"
        disabled={true}
      />
      <ProFormDigit
        name="weight"
        label="权重"
        fieldProps={{ precision: 1, step: 0.1 }}
        min={0}
        max={100}
        placeholder="请输入权重"
        rules={[
          {
            required: true,
            message: '请输入权重',
          },
        ]}
      />
      <ProFormText
        name="keywords"
        label="关键词"
        rules={[
          {
            required: true,
            message: '请输入关键词',
          },
          {
            min: 2,
            max: 64,
            message: '类型长度为2到64字符',
          },
        ]}
        placeholder="请输入关键词"
      />
      <ProFormTextArea
        name="description"
        label="描述"
        // 显示字符串长度
        fieldProps={{
          showCount: true,
          maxLength: 1024,
        }}
        rules={[
          {
            required: true,
            message: '请输入描述',
          },
          {
            min: 2,
            max: 1024,
            message: '描述长度为2到1024字符',
          },
        ]}
        placeholder="请输入描述"
      />
    </ModalForm>
  );
};

export default LinkEdit;
