# Implementation Plan

- [x] 1. 添加 Rust 依赖和基础结构




  - [ ] 1.1 在 Cargo.toml 添加 rusqlite、windows-sys 依赖
    - 添加 `rusqlite` 用于 SQLite 读取
    - 添加 `windows-sys` 用于 DPAPI 调用


    - 添加 `base64` 用于编码处理
    - _Requirements: 2.1_
  - [x] 1.2 创建 cookie 模块文件结构



    - 创建 `src-tauri/src/cookie/mod.rs`
    - 创建 `src-tauri/src/cookie/reader.rs`
    - 创建 `src-tauri/src/cookie/decrypt.rs`

    - _Requirements: 1.1, 2.1_

- [ ] 2. 实现 Cookie 数据模型和解密模块
  - [ ] 2.1 定义 Cookie 结构体和错误类型
    - 实现 Cookie struct 及 Serialize/Deserialize
    - 定义 CookieError 枚举



    - _Requirements: 1.2, 1.4_
  - [ ] 2.2 实现 Windows DPAPI 解密函数
    - 使用 windows-sys 调用 CryptUnprotectData

    - 处理 AES-GCM 加密的 v10/v20 Cookie
    - _Requirements: 2.1, 2.2_
  - [x]* 2.3 编写 DPAPI 解密属性测试

    - **Property 1: Domain filtering correctness**
    - **Validates: Requirements 1.1**

- [ ] 3. 实现 Chrome Cookie 读取器
  - [ ] 3.1 实现 Chrome 路径定位函数
    - 获取 Chrome User Data 目录
    - 支持 Default 和其他 Profile
    - _Requirements: 1.1_
  - [x] 3.2 实现数据库复制和读取逻辑




    - 复制 Cookies 文件到临时目录
    - 使用 rusqlite 查询 cookies 表

    - _Requirements: 2.3, 1.1_
  - [x] 3.3 实现域名过滤和 Cookie 组装

    - 按域名筛选 Cookie 记录
    - 解密并组装 Cookie 结构体
    - _Requirements: 1.1, 1.2_




  - [ ]* 3.4 编写域名过滤属性测试
    - **Property 1: Domain filtering correctness**
    - **Validates: Requirements 1.1**




  - [ ]* 3.5 编写数据完整性属性测试
    - **Property 2: Cookie data completeness**

    - **Validates: Requirements 1.2**

- [ ] 4. 注册 Tauri Commands
  - [x] 4.1 创建 read_chrome_cookies 命令

    - 接收 domain 参数
    - 返回 Vec<Cookie> 或错误信息
    - _Requirements: 1.1, 1.3, 1.4_

  - [ ] 4.2 在 lib.rs 注册命令
    - 添加到 invoke_handler
    - _Requirements: 1.1_

- [ ] 5. Checkpoint - 确保后端测试通过
  - Ensure all tests pass, ask the user if questions arise.






- [x] 6. 实现前端 Cookie Store


  - [ ] 6.1 创建 cookieStore Pinia 模块
    - 定义 Cookie 类型接口
    - 实现 cookies 状态和 loading/error 状态
    - 实现 fetchCookies action 调用 Tauri 命令
    - _Requirements: 1.1, 1.3_

- [ ] 7. 实现前端 CookieReader 组件
  - [ ] 7.1 创建 CookieReader.vue 基础结构
    - URL 输入框和读取按钮
    - 加载状态和错误提示
    - _Requirements: 1.1, 1.4_
  - [ ] 7.2 实现 Cookie 表格展示
    - 使用 DaisyUI table 组件
    - 显示 name、value、domain、path、expires 列
    - 实现长值截断和展开
    - _Requirements: 1.2, 3.1, 3.3_
  - [ ] 7.3 实现复制功能
    - 点击 Cookie 值复制到剪贴板
    - 显示复制成功提示
    - _Requirements: 3.2_
  - [ ] 7.4 实现 JSON 导出功能
    - 导出按钮触发下载
    - 生成标准 Cookie JSON 格式
    - _Requirements: 4.1, 4.2_
  - [ ]* 7.5 编写导出 round-trip 属性测试
    - **Property 4: Export round-trip consistency**
    - **Validates: Requirements 4.1, 4.2**

- [ ] 8. 添加路由和导航入口
  - [ ] 8.1 添加 Cookie 页面路由
    - 在 router 配置中添加 /cookie 路由
    - _Requirements: 1.1_
  - [ ] 8.2 在导航中添加入口
    - 添加导航链接或按钮
    - _Requirements: 1.1_

- [ ] 9. Final Checkpoint - 确保所有测试通过
  - Ensure all tests pass, ask the user if questions arise.
