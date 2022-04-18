import { MedSelectOption } from 'med-table';
import { Region } from '../types';

export class SelectData {
  static temperature(data: string[]): MedSelectOption<string>[] {
    return data.map(option => ({ value: option, label: option }));
  }

  static region(data: Region[]): MedSelectOption<string>[] {
    return data.map(({name}) => ({ value: name, label: name }));
  }
}
