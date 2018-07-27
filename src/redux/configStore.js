import {createStore, combineReducers} from 'redux';
import { Profile } from './profilesReducer';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          profiles: Profile
      })
    );

    return store;
}