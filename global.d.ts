declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames;
}

declare module '*.svg' {
  const svg: string
  export default svg
}

declare const __IS_DEV__: boolean
