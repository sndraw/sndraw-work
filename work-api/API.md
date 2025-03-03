# API 文档

## 一、格式定义

#### 接口返回数据格式

| 参数名 | 类型   | 描述     | 说明                              |
| ------ | ------ | -------- | --------------------------------- |
| code   | Number | 状态码   | 0：正常状态，其他数值：异常状态 |
| message    | String | 信息     | -                                 |
| data   | Any    | 数据     | -                                 |

## 二、接口列表

## 1.微信接口

### 1.1 微信 JS-SDK 权限验证配置 config 接口

#### 接口地址：/api/wechat/config

#### 请求方法：GET/POST

#### 请求参数：

| 参数 | 类型   | 描述         | 必填 |
| ---- | ------ | ------------ | ---- |
| hash | String | hash 值      | 是   |
| url  | String | 授权页面地址 | 是   |

#### 返回数据：

##### data: Object

| 参数名    | 类型   | 描述                        | 说明 |
| --------- | ------ | --------------------------- | ---- |
| appId     | String | 微信公众号/微信小程序 appID | -    |
| timestamp | Number | 时间戳                      | -    |
| nonceStr  | String | 随机字符串                  | -    |
| signature | String | 加密签名                    | -    |

**示例**

```
{
    "code": 0,
    "message": "请求成功",
    "data": {
        "appId": "wx722fb8f52823f937",
        "timestamp": "1616641250",
        "nonceStr": "0aQg7H6nRTQJEsPs",
        "signature": "d7402c4d902e3fca3b7867c2647218873cbff700"
    }
}
```
