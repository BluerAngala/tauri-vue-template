// 全局类型定义

export interface AppConfig {
  theme: string
  language: string
}

// Tauri 命令返回类型
export interface GreetResponse {
  message: string
}
