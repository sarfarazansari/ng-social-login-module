# ng-social-login-module

This library is an updated version of [ng4-social-login](https://github.com/sarfarazansari/ng4-social-login).

Social login authentication module for Angular 6 and above versions. 
Supports authentication with **Google**, **Linkedin** and **Facebook**.

For angular version < 6 check out [ng4-social-login](https://github.com/sarfarazansari/ng4-social-login).


## Getting started

### Installation 

```sh
npm install --save ng-social-login-module
yarn add ng-social-login-module
```

### Import the module

In your `AppModule`, import the `SocialLoginModule`

```javascript
import {
  SocialLoginModule, 
  AuthServiceConfig,
  GoogleLoginProvider, 
  FacebookLoginProvider, 
  LinkedinLoginProvider
} from 'ng-social-login-module';

/** 
 * config takes two params
 * 1. Provider config array
 * 2. Boolean to auto logged
 */
const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('LINKEDIN_CLIENT_ID')
  }
], true);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [...]
})
export class AppModule { }
```

### Sign in and out users

```javascript
import { 
  AuthService 
  FacebookLoginProvider, 
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng-social-login-module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIN(): void {
    this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
```

### Subscribe to the authentication state

You are notified when user logs in or logs out. You receive a `SocialUser` object when the user logs in and a `null` when the user logs out. `SocialUser` object contains basic user information such as name, email, photo URL, etc.

```javascript
import { AuthService } from 'ng-social-login-module';
import { SocialUser } from 'ng-social-login-module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
```

### Display the user information

```html
<img src='{{ user.photoUrl }}'>
<div>
  <h4>{{ user.name }}</h4>
  <p>{{ user.email }}</p>
</div>
```

## Contributing to project
```sh
you are welcome to report an issue or creating a pull request.
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
