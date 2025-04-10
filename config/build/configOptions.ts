export type BuildMode = 'production' | 'development'

export interface ConfigPaths {
  entryPath: string
  buildPath: string
  htmlPath: string
  srcPath: string
}

export interface ConfigEnv {
  mode?: BuildMode,
  port?: number,
  apiUrl?: string
}

export interface ConfigOptions {
  mode: BuildMode
  paths: ConfigPaths
  isDev: boolean
  port: number
  apiUrl: string
}
