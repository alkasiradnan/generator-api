const GenerateCallService = () =>
{
    return `import axios from 'axios';

    export function axiosCallService(url, payload = {}) {
        return new Promise((resolve, reject) => {
            var qs = require('querystring');
            const location = url;
             let postData = {
            //    "token": typeof window != 'undefined' ? localStorage.getItem('token') : null,
            //                 "accountName": typeof window != 'undefined' ? localStorage.getItem('accountName') : null,
                            ...payload}
            console.log("in axios...",postData);
            
            axios({
                method: 'POST',
                url: url,
                data: postData,
                headers:{'Content-Type' : 'application/json'}
            }).then(resolve)
                .catch(({ response }) => {
                    if (response.status == 403) {
                        // typeof window != 'undefined' ? localStorage.clear() : null
                        // typeof window != 'undefined' ? localStorage.setItem('pathName', location.href) : null
                        location.replace('/')
                    }
                    reject();
                })
        })
    }
    export function axiosCallServicePut(url, payload = {}) {
        return new Promise((resolve, reject) => {
            //var qs = require('querystring');
            const location = url;
             let postData = {...payload}
            console.log("in axios...",postData);
            
            axios({
                method: 'PUT',
                url: url,
                data: postData,
                headers:{'Content-Type' : 'application/json'}
            }).then(resolve)
                .catch(({ response }) => {
                    if (response.status == 403) {
                        location.replace('/')
                    }
                    reject();
                })
        })
    }`;
}

module.exports = {GenerateCallService}