import {fetchApi} from '../services/api';

export const createNewUser = async (payload) => {

   return async (dispatch) =>{
       try{
        const response = await fetchApi("/user/create", "POST", payload, 200)
       }catch(e){

       } 
   } 
}




// export const createNewUser = (payload) =>{
//     return{
//         type: "User",
//         payload: "AAA"
//     }
// }
