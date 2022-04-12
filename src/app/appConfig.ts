import { AppConfig } from './types';

export const APP_CONFIG: AppConfig = {
  "apiUrls": {
    "getData": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=getOtherLogistics",
    "updateRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics",
    "addRow": "https://meddata.com.ua/index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics"
  },
};
