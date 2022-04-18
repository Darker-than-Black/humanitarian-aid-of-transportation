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

export interface Item {
  comment?: string
  creator?: string
  driver: Driver
  id: string
  name?: string
  recipient_address?: string
  recipient_contact?: string
  recipient_name?: string
  recipient_phone?: string
  recipient_region?: string
  sender_address?: string
  sender_contact?: string
  sender_name?: string
  sender_phone?: string
  sender_region?: string
  status?: string
  status_name?: string
  temperature?: string
  transport: Transport
  volume?: string
  weight?: string
}

export interface Region {
  id: string
  name: string
}

export interface Driver {
  id?: string
  name?: string
  phone?: string
}

export interface Transport {
  id?: string
  name?: string
  type?: string
}

export interface ItemForm extends Record<string, any> {}
