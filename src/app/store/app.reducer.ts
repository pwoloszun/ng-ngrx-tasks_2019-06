import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

export interface ApplicationState {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
