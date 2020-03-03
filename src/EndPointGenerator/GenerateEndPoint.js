const GenerateEndPoint = () =>
{
    return `import { axiosCallService,axiosCallServicePut,axiosCallServiceDelete } from './../common/apiCallService';

    export const postUserDetails = (baseUrl, data) =>
     {     
         console.log("in user details..",data);
         axiosCallService(`+'`'+`$`+'{'+`baseUrl`+'}'+`/employee-data`+ '`'+`, data);
    };
  
    export const putUserDetails = (baseUrl, data) =>
    {     
         console.log("in user details edit..",data);
         axiosCallServicePut(`+'`'+`$`+'{'+`baseUrl`+'}'+
         `/employee-data/`+`$`+'{'+`data.id`+'}'+ '`'+`, data);
    };

    export const deleteUserDetails = (baseUrl, data) =>
    {     
         console.log("in user details delete..",data);
         axiosCallServiceDelete(`+'`'+`$`+'{'+`baseUrl`+'}'+
         `/employee-data/`+`$`+'{'+`data.id`+'}'+ '`'+`, data);
    };
        
    export default {postUserDetails,putUserDetails,deleteUserDetails};`;
}

module.exports  ={GenerateEndPoint}