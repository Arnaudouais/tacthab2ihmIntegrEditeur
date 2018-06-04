import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TacthabService} from "./tacthab.service";

import { AppComponent } from './app.component';
import { SocketBusComponent } from './socket-bus/socket-bus.component';
import { UpnpMediaPlayerComponent } from './upnp-media-player/upnp-media-player.component';
import { UpnpMediaExplorerComponent } from './upnp-media-explorer/upnp-media-explorer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSliderModule,
  MatToolbarModule
} from '@angular/material';
import {TranslateCompiler, TranslateModule} from '@ngx-translate/core';
import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DialogConnectComponent } from './dialog-connect/dialog-connect.component';
import {HttpClientModule} from '@angular/common/http';
import { HueBridgeComponent } from './hue-bridge/hue-bridge.component';
import { HueLampComponent } from './hue-lamp/hue-lamp.component';
import { MetawearComponent } from './metawear/metawear.component';
import { DialogBridgeBleComponent } from './dialog-bridge-blecomponent/dialog-bridge-ble.component';
import {RouterModule} from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import {CcblRootComponent} from './ccbl-root/ccbl-root.component';
import {appRoutes} from './routes';
import { PipoComponent } from './pipo/pipo.component';
import { DialogAppendCcblFromBrickComponent } from './dialog-append-ccbl-from-brick/dialog-append-ccbl-from-brick.component';
import {CcblGfxModule, CcblGfxService} from "ccbl-gfx";

@NgModule({
  declarations: [
    AppComponent,
    SocketBusComponent,
    UpnpMediaPlayerComponent,
    UpnpMediaExplorerComponent,
    DialogConnectComponent,
    HueBridgeComponent,
    HueLampComponent,
    MetawearComponent,
    DialogBridgeBleComponent,
    DevicesComponent,
    CcblRootComponent,
    PipoComponent,
    DialogAppendCcblFromBrickComponent
  ],
  entryComponents: [
    DialogConnectComponent, DialogBridgeBleComponent, UpnpMediaExplorerComponent,
    DialogAppendCcblFromBrickComponent,
    DevicesComponent, CcblRootComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    TranslateModule.forRoot({
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatSliderModule,
    MatDialogModule, MatCardModule,
    MatButtonModule,
    CcblGfxModule
  ],
  providers: [TacthabService, CcblGfxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
