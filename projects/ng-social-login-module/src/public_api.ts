/*
 * Public API Surface of ng-social-login-module
 */

export * from './lib/auth.module';
export { LoginProvider } from './lib/entities/login-provider';
export { SocialUser, LinkedInResponse, LoginProviderClass } from './lib/entities/user';
export { FacebookLoginProvider } from './lib/providers/facebook-login-provider';
export { GoogleLoginProvider } from './lib/providers/google-login-provider';
export { LinkedinLoginProvider } from './lib/providers/linkedin-login-provider';
export * from './lib/auth.service';
