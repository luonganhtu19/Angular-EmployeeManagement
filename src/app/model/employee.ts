import {Office} from './office';
import {Position} from './position';

export interface Employee {
  id?: number;
  name?: string;
  age?: number;
  office?: Office;
  position?: Position;
}
