import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable }  from 'rxjs/Rx';
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { SessionService} from './session.service';

@Injectable()
export class CenterActivationService implements CanActivate {

  constructor(public sessionService:SessionService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

      let acceso = this.sessionService.user ? true : false;
  console.log("activated route ")
    return acceso;
  }
  }
