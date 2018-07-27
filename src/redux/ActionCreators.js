
import * as ActionTypes from './ActionTypes';

export const addProfile = (id,name,age,image,height,weight,location,description) => ({
   
      
           type: ActionTypes.ADD_PROFILE,
           payload:{
               id: id,
               name: name,
               age: age,
               image: image,
               height: height,
               weight: weight,
               location: location,
               description: description
            
      }
});