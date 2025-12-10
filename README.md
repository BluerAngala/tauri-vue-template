# Tauri + Vue + DaisyUI 模板

一个现代化的桌面应用开发模板，集成了 Tauri 2.x、Vue 3、DaisyUI 5 和 Tailwind CSS 4。

## ✨ 特性

- 🦀 **Tauri 2.x** - 轻量级跨平台桌面应用框架
- 💚 **Vue 3** - 组合式 API + TypeScript
- 🎨 **DaisyUI 5** - 32+ 主题，开箱即用的 UI 组件
- 🎯 **Tailwind CSS 4** - 原子化 CSS 框架
- 📦 **Pinia** - Vue 官方状态管理
- 🛣️ **Vue Router** - 单页应用路由
- 📝 **日志系统** - 前后端统一日志，方便调试
- 🔧 **ESLint + Prettier** - 代码规范和格式化
- 🚀 **GitHub Actions** - 自动化 CI/CD，多平台打包

## 📁 项目结构

```
src/
├── assets/          # 静态资源
├── components/      # 通用组件
├── composables/     # 组合式函数
│   ├── useTheme.ts  # 主题切换
│   └── useLogger.ts # 日志工具
├── router/          # 路由配置
├── stores/          # Pinia 状态管理
├── styles/          # 全局样式
├── types/           # TypeScript 类型
├── views/           # 页面组件
├── App.vue          # 根组件
└── main.ts          # 入口文件

src-tauri/
├── src/
│   ├── lib.rs       # Tauri 命令和插件
│   └── main.rs      # 入口
├── Cargo.toml       # Rust 依赖
└── tauri.conf.json  # Tauri 配置
```

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+
- Rust 1.70+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm tauri dev
```

### 构建应用

```bash
pnpm tauri build
```

## 📝 开发命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动前端开发服务器 |
| `pnpm tauri dev` | 启动 Tauri 开发模式 |
| `pnpm build` | 构建前端 |
| `pnpm tauri build` | 打包桌面应用 |
| `pnpm lint` | ESLint 检查 |
| `pnpm format` | Prettier 格式化 |
| `pnpm type-check` | TypeScript 类型检查 |

## 🎨 主题切换

内置 32 个 DaisyUI 主题，点击右上角主题按钮即可切换。主题会自动保存到 localStorage。

## 📝 日志系统

### 前端日志

```typescript
import { useLogger } from '@/composables/useLogger'

const logger = useLogger('MyComponent')
logger.info('这是一条信息')
logger.warn('这是一条警告')
logger.error('这是一条错误')
```

### 后端日志

```rust
use log::{info, warn, error};

info!("这是一条信息");
warn!("这是一条警告");
error!("这是一条错误");
```

日志会同时输出到：
- 浏览器控制台（开发模式）
- 终端（Rust 后端）
- Tauri 日志文件

## 🔧 自定义 Tauri 命令

在 `src-tauri/src/lib.rs` 中添加命令：

```rust
#[tauri::command]
fn my_command(arg: &str) -> String {
    format!("收到参数: {}", arg)
}
```

在前端调用：

```typescript
import { invoke } from '@tauri-apps/api/core'

const result = await invoke('my_command', { arg: 'hello' })
```

## 📦 发布

创建 Git tag 触发 GitHub Actions 自动打包：

```bash
git tag v1.0.0
git push origin v1.0.0
```

打包产物：
- Windows: `.msi`, `.exe`
- macOS: `.dmg` (Intel + Apple Silicon)
- Linux: `.deb`, `.AppImage`

## 📄 License

MIT
