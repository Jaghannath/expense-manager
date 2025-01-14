import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as EMActions from '../store/em.action';
import { of, switchMap, tap } from "rxjs";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RoutingUrl } from "../components/enums/routing.enum";
import { AuthService } from "../service/auth.service";

@Injectable()
export class ExpenseManagerEffects {
    
    loginClicked$;
    loginSuccess$;

    constructor(
        private readonly action$: Actions,
        private readonly apiService: ApiService,
        private readonly router: Router,
        private readonly authService: AuthService) {
        
        this.loginClicked$ = createEffect(() => 
        this.action$.pipe(
            ofType(EMActions.loginClicked),
            switchMap((action) => this.apiService.login(action.loginDetails).pipe(
                switchMap((response) => {
                        return response ? of(EMActions.loginSuccess()) : of(EMActions.loginFailed());
                })
            )))
        );

        this.loginSuccess$ = createEffect(() =>
            this.action$.pipe(
                ofType(EMActions.loginSuccess),
                tap(() => {
                    this.authService.setToken('token');
                    this.router.navigate([RoutingUrl.dashboard]);
                })
            ),
            { dispatch: false }
        );
    }
}