import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
@NgModule({
  imports:[MatIconModule],
  exports: [MatIconModule],
  providers:[MatIconRegistry]})
export class IconModule {
 private path = '../../../../assets/images';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon('navigate_before', this.setPath(`${this.path}/navigate_before.svg`))
      .addSvgIcon('logo_google', this.setPath(`${this.path}/logo-google.svg`))
      .addSvgIcon('icon_qr_code', this.setPath(`${this.path}/qr_code.svg`))
      .addSvgIcon('logo_raposo_shoping', this.setPath(`${this.path}/logo-raposo-shopping.svg`))
      .addSvgIcon('check', this.setPath(`${this.path}/check.svg`))
      .addSvgIcon('camera_add_picture', this.setPath(`${this.path}/camera-add-picture.svg`))
      .addSvgIcon('heart', this.setPath(`${this.path}/heart.svg`))
      .addSvgIcon('logo', this.setPath(`${this.path}/logo.svg`))
      .addSvgIcon('add_location', this.setPath(`${this.path}/add_location.svg`))
      .addSvgIcon('change_password', this.setPath(`${this.path}/change-password.svg`))
      .addSvgIcon('interests', this.setPath(`${this.path}/interests.svg`))
      .addSvgIcon('account_circle', this.setPath(`${this.path}/account_circle.svg`))
      .addSvgIcon('local_mall', this.setPath(`${this.path}/local_mall.svg`))
      .addSvgIcon('logo_facebook', this.setPath(`${this.path}/logo-facebook.svg`))
      .addSvgIcon('logo_instagram', this.setPath(`${this.path}/logo-instagram.svg`))
      .addSvgIcon('logo_youtube', this.setPath(`${this.path}/logo-youtube.svg`))
      .addSvgIcon('gallery', this.setPath(`${this.path}/gallery.svg`))
      .addSvgIcon('assignment_ind', this.setPath(`${this.path}/assignment_ind.svg`))
      .addSvgIcon('local_hospital', this.setPath(`${this.path}/local_hospital.svg`))
      .addSvgIcon('heart_broken', this.setPath(`${this.path}/heart_broken.svg`))
      .addSvgIcon('mode_of_travel', this.setPath(`${this.path}/mode_of_travel.svg`))
      .addSvgIcon('tune', this.setPath(`${this.path}/tune.svg`))
      .addSvgIcon('date_range', this.setPath(`${this.path}/date_range.svg`))

      
      ;

    }
  private setPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
