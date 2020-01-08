import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Platform, ModalController, ToastController, AlertController } from '@ionic/angular';
import { LicensesService } from '../internal-providers/licenses';
import { DomSanitizer } from '@angular/platform-browser';


export interface ShowLicense {
  name: string,
  url?: string,
  description?: string,
  license?: string,
  licenseText?: string
}

const HTML_TEMPLATE = `
<ion-header>
  <ion-toolbar>
    <ion-title>Licenses</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-card *ngFor="let license of licenses; trackBy: licensesTrackByFn">
    <ion-card-header>
      <ion-card-title>{{license.name}}</ion-card-title>
      <ion-card-subtitle><a href="{{license.url}}" target="_blank">{{license.url}}</a></ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <p>{{license.description}}</p>
      <pre class="license-text">{{licensesService.get(license.license) || license.licenseText}}</pre>
    </ion-card-content>
  </ion-card>

</ion-content>

<ion-footer class="ion-padding">
  <ion-button fill="clear" color="danger" (click)="dismiss()">
    <ion-label>OK</ion-label>
  </ion-button>
</ion-footer>
`;

const CSS_STYLES = `
.license-text {
  white-space: pre-wrap;
  padding: 10px;
  color: #333;
  background-color: #eee;
}
`
  ;

@Component({
  selector: 'gt-ionic-licenses',
  template: HTML_TEMPLATE,
  styles: [CSS_STYLES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IonicLicensesComponent implements OnInit, OnDestroy {

  licenses: ShowLicense[];

  constructor(private cd: ChangeDetectorRef,
    public licensesService: LicensesService,
    private modalCtrl: ModalController,
    private sanitized: DomSanitizer) { }

  async ngOnInit() {
    console.log(this.licenses);



    this.cd.markForCheck();
  }

  licensesTrackByFn(index, license) {
    return license ? license.name : null;
  }

  ngOnDestroy() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
