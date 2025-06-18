import type { MenuProps } from 'antd'

export type MenuItem = Required<MenuProps>['items'][number]

export interface IMetaData {
  firstDesc: string
  pageName: string
  secondDescription: string
  urlDir: string
  otherDesc: string
  twiterDesc: string
}
