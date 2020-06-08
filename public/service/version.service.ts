import { Injectable } from "@indiv/core";

let a = 0;

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private lastVersion: string = 'v4.1.1';

  constructor() {
    a ++;
    console.log(22, '测试 providedIn: root 的渲染次数，应该为1', a);
  }

  public getLastVersion(): string {
    return this.lastVersion;
  }
}
