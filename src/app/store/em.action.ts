import { createAction, props } from "@ngrx/store";
import { LoginDetails } from "../models/login.model";

export const loginClicked = createAction('[Login] Login clicked',
    props<{ loginDetails: LoginDetails }>());

export const loginSuccess = createAction('[Login API] Login Success');

export const loginFailed = createAction('[Login API] Login Failed');