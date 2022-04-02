import { AppConfig } from './types';
import { FIELD_TYPES } from './configs/fieldTypes';

export const APP_CONFIG: AppConfig = {
  "apiUrls": {
    "getData": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=getOtherLogistics",
    "updateRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics",
    "addRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics"
  },
};
