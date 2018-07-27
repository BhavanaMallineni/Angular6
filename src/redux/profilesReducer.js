import {Profiles} from '../shared/profiles';
 import * as ActionTypes from  './ActionTypes';
export const Profile = (state=Profiles,action)=>{
    switch(action.type){
        case ActionTypes.ADD_PROFILE:
           var profile = action.payload;
           profile.id = state.length;
           console.log("Profile",profile);
           return state.concat(profile);
       default:
             return state;
    }
           
};