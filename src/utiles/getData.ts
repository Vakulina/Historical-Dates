import dataJson from '../constants/data.json'; 
import { IDataTDO } from '../modeles/dataTDO';

export const getData = () => {
  return dataJson as IDataTDO;
}
