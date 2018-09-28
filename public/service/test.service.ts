// import { Injectable } from 'indiv';
import { Injectable } from '../../../InDiv/src';

@Injectable()
export default class TestService {
  public data: number;
  constructor() {
    this.data = 1;
  }

  public getData = (): number => {
    return this.data;
  }
  public setData = (data: number): void => {
    this.data = data;
  }
}
