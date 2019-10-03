import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { SignedUserService } from 'src/app/auth/signin/signed-user.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private signedUserService: SignedUserService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.signedUserService.isUserSigned()) {
            return true;
        } else {
            this.router.navigate(['/signin']);
        }
    }
}
