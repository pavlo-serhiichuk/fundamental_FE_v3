export type BuildMode = 'production' | 'development'

export interface ConfigPaths {
  entryPath: string
  distPath: string
  htmlPath: string
}

export interface ConfigOptions {
  mode: BuildMode
  paths: ConfigPaths
  isDev: boolean
}
