import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicLicenses } from './providers/ionic-licenses';
import { LicensesService } from './internal-providers/licenses';
import { IonicLicensesComponent } from './components/ionic-licenses';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    // declare all components that your module uses
    IonicLicensesComponent
  ],
  entryComponents: [
    // If not lazy loaded
    IonicLicensesComponent
  ],
  exports: [
    // export the component(s) that you want others to be able to use
    IonicLicensesComponent
  ]
})
export class IonicLicensesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicLicensesModule,
      providers: [IonicLicenses, LicensesService]
    };
  }
}

