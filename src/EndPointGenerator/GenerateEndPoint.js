const GenerateEndPoint = () =>
{
    return `import { axiosCallService,axiosCallServicePut } from './../common/apiCallService';

    export const getUserDetails = (baseUrl, data) =>
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
        
    export default {getUserDetails,putUserDetails};`;
}

module.exports  ={GenerateEndPoint}