import { MedSelectOption } from 'med-table';

export class SelectData {
  static temperature(data: string[]): MedSelectOption<string>[] {
    return  data.map(option => ({ value: option, label: option }));
  }
}
