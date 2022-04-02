export interface AppConfig {
  apiUrls: {
    getData: string
    updateRow?: string
    addRow?: string
  }
}

export interface ServerResponse<T> {
  success: boolean
  error?: string
  data: T
}

export interface Item extends Record<string, string | undefined> {}

export interface ItemForm extends Record<string, any> {}
