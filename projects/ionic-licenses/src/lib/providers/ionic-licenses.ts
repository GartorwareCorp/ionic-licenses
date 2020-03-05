import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShowLicense, IonicLicensesComponent } from '../components/ionic-licenses';

export interface ShowLicenseOptions {
  cssClass?: string,
  backdropDismiss?: boolean,
  keyboardClose?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class IonicLicenses {

  private defaultOpt: ShowLicenseOptions = {
    cssClass: '',
    backdropDismiss: true,
    keyboardClose: true,
  }

  constructor(private modalCtrl: ModalController) {
  }

  async showLicenses(licenses: ShowLicense[], options?: ShowLicenseOptions): Promise<void> {

    let opts = Object.assign({}, this.defaultOpt, options);

    let licensesModal = await this.modalCtrl.create({
      component: IonicLicensesComponent,
      componentProps: {
        licenses: licenses
      },
      cssClass: opts.cssClass,
      backdropDismiss: opts.backdropDismiss,
      keyboardClose: opts.keyboardClose
    });
    licensesModal.present();

    return licensesModal.onWillDismiss().then(res => {
      return res.data;
    });
  }


}
