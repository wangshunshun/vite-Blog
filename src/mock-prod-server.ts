import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
//https://cn.vitejs.dev/guide/features.html#glob-import
// @ts-ignore
// const modulesFiles = import.meta.glob('../mock/*', { eager: true })
import testModule from '../mock/system'
// let modules = []
// for (const filePath in modulesFiles) {
//   //读取文件内容到 modules
//   modules = modules.concat(modulesFiles[filePath])
// }
export function setupProdMockServer() {
  //创建prod mock server
  createProdMockServer([...testModule])
}