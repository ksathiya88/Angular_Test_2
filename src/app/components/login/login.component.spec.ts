import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "src/app/service/authentication.service";
import * as sinon from 'sinon';
import { SplitInterpolation } from '@angular/compiler';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from 'src/app/app.module';
describe('LoginComponent', () => {
  let loginComponent: LoginComponent;
  let component:LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
 
  let fakeAutenticatorService:sinon.SinonMock;
  let fakeRouterService:sinon.SinonMock;
  
  let authenticationService:any;
  let router:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports:[FormsModule, RouterTestingModule.withRoutes([]) ],
      providers:[
        AuthenticationService,HttpHandler,HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    authenticationService = TestBed.get(AuthenticationService);
    fakeAutenticatorService = sinon.mock(authenticationService);
    fakeRouterService = sinon.mock(router);
  });

  it('should create', () => {
    fakeAutenticatorService.expects('login').withArgs("aa","aa").returns({subscribe:(data,error)=>{data();}});
    fakeRouterService.expects('navigate').withArgs(["home", "employeeList"]);
    expect(component).toBeTruthy();
    
    component.onSubmit({value:{username:"aa",password:"aa"}});
    fakeAutenticatorService.verify();
    fakeAutenticatorService.restore();
    fakeRouterService.verify();
    fakeRouterService.restore();
   });
});
