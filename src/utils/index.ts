import { ConfigItem, ColumnItem } from 'declaration/index'

export const getColumns = (list: Array<ConfigItem> = []): Array<ColumnItem> => {
  const columns: Array<ColumnItem> = []
  for (let i = 0; i < list.length; i++) {
    const { isTableColumn, title, dataIndex, key, renderColumn } = list[i]
    if (!isTableColumn) {
      continue
    } else {
      columns.push({
        title,
        dataIndex,
        key,
        render: renderColumn
      })
    }
  }
  return columns
}