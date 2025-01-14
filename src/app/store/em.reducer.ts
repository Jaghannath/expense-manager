import { createReducer } from "@ngrx/store";
import { InitialState } from "./em.store";
import * as EMActions from '../store/em.action';

export const ExpenseManagerreducer = createReducer(
    InitialState,
)
