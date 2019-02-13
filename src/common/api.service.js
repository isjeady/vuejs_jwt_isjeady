import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'


const ApiService = {
    init() {
      Vue.use(VueAxios, axios);
      ApiService.setHeader();

      Vue.axios.interceptors.request.use(function (config) { 
         return config;
      }, function (error) {
          return Promise.reject(error);
      });
  
      Vue.axios.interceptors.response.use(function (config) {
          return config;
      }, function (error) {
        return Promise.reject(error);
      });
    },
  
    setHeader () {
      Vue.use(VueAxios, axios);
      Vue.axios.defaults.baseURL = API_URL

      Vue.axios.defaults.headers.common['Accept'] = "application/json";
      Vue.axios.defaults.headers.common['Content-Type'] = "application/json";
     
      if(JwtService.getToken()){
        Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`
      }
      
    },
  
    query (resource, params) {
      return Vue.axios
        .get(resource, params);
    },
  
    get (resource) {
      ApiService.setHeader();
      return Vue.axios
        .get(`${resource}`);
    },
  
    post (resource, params) {
      ApiService.setHeader();
      this.setHeader();
      return Vue.axios.post(`${resource}`, params);
    },
  
    update (resource, params) {
      ApiService.setHeader();
      return Vue.axios
      .put(`${resource}`, params);
    },
  
    put (resource, params) {
      ApiService.setHeader();
      return Vue.axios
        .put(`${resource}`, params);
    },
  
    delete (resource) {
      ApiService.setHeader();
      return Vue.axios
        .delete(resource);
    }
  }

  export default ApiService