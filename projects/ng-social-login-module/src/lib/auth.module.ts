import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './auth.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class SocialLoginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SocialLoginModule,
      providers: [ AuthService ]
    };
  }
}
