
const BASE_URL = "http://localhost:3333";

export const api = async (url, method, body = null, headers = {}) => {

    try {
      const endPoint = BASE_URL.concat(url);
      const reqBody = body ? JSON.stringify(body) : null;

      const fetchParams = {method, headers};

      if((method === "POST" || method === "PUT") && !reqBody) {
          throw new Error("Request body required");
      }

      if(reqBody) {
          fetchParams.headers["Content-type"] = "application/json";
          fetchParams.body = reqBody;
      }

      const fetchPromise = fetch(endPoint, fetchParams);
      const timeOutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject("Request Timeout");
          }, 3000);
      });

      const response = await Promise.race([fetchPromise, timeOutPromise]);

      return response;
    } catch (e) {
     return e ;
    }
}

export const fetchApi = async (url, method, body, statusCode, token = null, loader = false, promiseReturnType = "json" ) => {
    try {
        const headers = {}  
        if(token) {
            headers["x-auth"] = token;
        }

        const response = await api(url, method, body, headers);
        console.log(response)

        if(response.status === statusCode) {
           
            const responseBody = await response.json();
           return responseBody; 
        }
        throw response;
    }catch (error){
        throw error
    }
}