# MinIO配置指南
‌‌在MinIO中创建桶和策略的具体步骤如下‌：

## 1.登录MinIO控制台‌：
使用管理员账户登录MinIO控制台。
## ‌2.创建策略‌：
在左侧菜单中，点击“Access Management”（访问管理）。

在“Policies”（策略）页面，点击“Create Policy”（创建策略）按钮。

输入策略名称（如work-policy），并在编辑框中输入以下JSON策略：

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::work/*"
            ]
        }
    ]
}
```
点击“Save”（保存）来创建策略。

## 3.‌创建用户并分配策略‌：
在左侧菜单中，点击“Users”（用户）。

如果已有用户，点击该用户进行编辑；如果没有，点击“Create User”（创建用户），输入用户名和密码，并点击“Save”（保存）。

在用户详情页，点击“Add Policy”（添加策略），选择已创建的work-policy策略，然后点击“Add”（添加）。

‌验证用户权限‌：用户将只能访问test桶，无法访问其他桶。可以让用户登录控制台并尝试访问其他桶，验证权限是否正确‌


