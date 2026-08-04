## 1. 项目描述
华安网（lihuaan.cn）是一家专业的技术服务公司，提供电脑办公、弱电工程、软件网站开发等IT解决方案。目标用户为企业和个人客户，核心价值在于提供高品质的技术服务与全方位技术支持。

## 2. 前端页面结构
- `/` - 首页（单页长滚动设计，包含 Hero 轮播、服务项目、客户案例与合作伙伴、关于我们、联系我们、页脚）
- `/about` - 关于我们
- `/contact` - 联系我们
- `/cases` - 客户案例
- `/services/it-operations` - IT运维服务详情
- `/services/:serviceId` - 服务详情页
- `/admin/login` - 管理员登录
- `/admin` - 管理后台仪表盘
- `/admin/services` - 服务项目管理
- `/admin/cases` - 客户案例管理
- `/admin/inquiries` - 客户咨询管理
- `/admin/analytics` - 数据分析
- `/admin/settings` - 系统设置
- `/admin/notifications` - 通知中心
- `/admin/team` - 团队管理（成员管理 + 部门管理）
- `/admin/site/settings` - 网站基本设置（含 Logo 上传）
- `/admin/site/navigation` - 导航管理（前台导航 + 页脚导航 + 后台导航）
- `/admin/users` - 用户管理
- `/admin/permissions` - 权限管理
- `/admin/system/logs` - 操作日志（权限变更追踪）
- `/account` - 个人中心（个人信息 / 我的咨询 / 修改密码）
- `/account/login` - 用户登录
- `/account/register` - 用户注册

## 3. 核心功能
### 前台
- [x] 首页导航栏（固定顶部，滚动变色）
- [x] Hero 图片轮播区（自动播放、手动切换）
- [x] 服务项目展示（三列卡片网格）
- [x] 关于我们板块（公司介绍 + 数据统计）
- [x] 联系我们板块（联系方式卡片）
- [x] 页脚（版权信息 + ICP备案）
- [x] 平滑滚动导航
- [x] 移动端响应式适配
- [x] 客户案例展示（分类筛选 + 案例卡片网格）
- [x] 合作伙伴展示（Logo 网格）
- [x] 全局返回顶部按钮

### 后台管理
- [x] 管理员登录（Supabase Auth）
- [x] AuthGuard 路由保护
- [x] 仪表盘（统计卡片 + 营收图表 + 服务分布 + 最近咨询/案例）
- [x] 服务项目 CRUD（搜索/筛选/分页/批量操作）
- [x] 客户案例 CRUD（搜索/筛选/分页/批量操作）
- [x] 客户咨询管理（状态流转/详情查看/删除/批量操作）
- [x] 数据分析（月度趋势/来源分布/转化漏斗/地域分布/同比对比）
- [x] 系统设置（账户信息/公司信息/通知偏好/主题外观/AI助手）
- [x] 设置页 localStorage 持久化
- [x] 侧边栏动态数据徽章
- [x] 通知管理页（列表/筛选/批量操作/已读未读标记）
- [x] 团队管理（成员 CRUD/部门筛选/状态切换/批量操作/拖拽排序）
- [x] 部门管理（部门 CRUD/拖拽排序/状态切换，localStorage 持久化）
- [x] 网站基本设置（Logo 上传/通用信息/SEO/联系方式/社交媒体/素材管理，支持 Supabase Storage 上传）
- [x] 用户管理（用户 CRUD/角色分配/状态开关）
- [x] 权限管理（角色矩阵/模块开关）
- [x] 导航管理（前台导航/页脚导航/后台导航，各独立数据 + 拖拽排序）
- [x] 后台侧边栏动态渲染（读取 localStorage 中后台导航配置）

## 4. 数据模型
### Supabase 数据库表
- `services` — 服务项目（id, name, category, description, price, status, created_at）
- `cases` — 客户案例（id, title, category, client, description, date, status, created_at）
- `inquiries` — 客户咨询（id, company, contact, phone, email, service, status, date, amount, message, created_at）
- `team_members` — 团队成员（id, name, position, email, phone, department, avatar_url, bio, full_bio, education, certifications, expertise, status, join_date, sort_order, created_at）
- `profiles` — 用户档案（id UUID PK → auth.users, user_type: employee/client/visitor, display_name, email, phone, company, avatar_url, status, last_login, created_at, updated_at）

## 5. 后端 / 第三方集成
- Supabase: 数据库 + 认证 + Storage（avatars bucket 用于 Logo/头像上传）
- Shopify: 不需要
- Stripe: 不需要
- Readdy Agent: AI 客服（全站前台页面）

## 6. 开发阶段

### Phase 1: 首页页面构建 ✅
- 状态: 已完成

### Phase 2: 子页面与后台 ✅
- 状态: 已完成

### Phase 3: 优化完善（当前）
- 目标: 完善后台交互、动态侧边栏、导航系统、团队管理拆分
- 状态: 进行中
- 已完成:
  - [x] 基本设置 Logo 上传
  - [x] 页脚导航管理
  - [x] 后台侧边栏动态渲染
  - [x] 团队管理拆分为成员管理 + 部门管理