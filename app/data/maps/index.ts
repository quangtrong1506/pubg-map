import { destonMap } from './deston';
import { erangelMap } from './erangel';
import { karakinMap } from './kakakin';
import { miramarMap } from './miramar';
import { paramoMap } from './paramo';
import { rondoMap } from './rondo';
import { sanhokMap } from './sanhok';
import { taegoMap } from './taego';
import { vikendiMap } from './vikendi';

const MAPS = [erangelMap, miramarMap, sanhokMap, karakinMap, paramoMap, taegoMap, destonMap, vikendiMap, rondoMap];
export * from './map';
export { MAPS };

