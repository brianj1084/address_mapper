/// <reference path="../_app.ts" />

module app.controllers {
    'use strict';
    
    export class HomeController {
        address: string;
        city: string;
        state: string;
        zipCode: string;
        
        mapUrl: string;
        
        constructor(private $http: ng.IHttpService, private $log: ng.ILogService, private config: AppConfig) {
            var ctrl = this;
        }
        
        showMap() {
            var ctrl = this;
            
            var fullAddress = ctrl.address +  ", " + ctrl.city + ", " + ctrl.state + " " + ctrl.zipCode;
            var geoCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(fullAddress) + '&key=' + ctrl.config.googleApiKey;
            
            ctrl.$http.get(geoCodeUrl).then((response: any) => {
                var lat = response.data.results[0].geometry.location.lat;
                var lng = response.data.results[0].geometry.location.lng;
                
                ctrl.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lng + '&size=600x300&maptype=roadmap&markers=' + encodeURIComponent('color:red|' + lat + ',' + lng) +  '&key=' + ctrl.config.googleApiKey;
            });
        }
    }
}