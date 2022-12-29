import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Injectable({providedIn: 'root'})
export class Globals {
  _isPlatformBrowser: boolean;
  _isPlatformServer: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this._isPlatformBrowser = isPlatformBrowser(this.platformId);
    this._isPlatformServer = isPlatformServer(this.platformId);
  }

  get isPlatformBrowser(): boolean {
    return this._isPlatformBrowser;
  }

  get isPlatformServer(): boolean {
    return this._isPlatformServer;
  }
}
