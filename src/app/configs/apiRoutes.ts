export const API_URL = 'https://meddata.com.ua/';

export const GET_LOGISTICS = `${API_URL}index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=getOtherLogistics`;
export const UPDATE_LOGISTIC = `${API_URL}index.php?option=com_fabrik&format=raw&task=plugin.userAjax&method=humanitarian&function=saveOtherLogistics`;
