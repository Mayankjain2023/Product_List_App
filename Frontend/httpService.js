//custom service

app.service('httpService',httpService);

function httpService($rootScope,$http){

        this.get=function(url){
            return $http({
                url:API_URL+ url,
                method:"GET",
                headers:{
                    'Content-Type':'application/json'
                }
            });
        };
        
        this.post=function(url,data){
            return $http({
                url:API_URL+url,
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                data:data
            });
        }; 

        this.put=function(url,data){
            return $http({
                url:API_URL+url,
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                data:data
            });
        }; 


        this.delete=function(url,data){
            return $http({
                url:API_URL+url,
                method:"DELETE",
                headers:{
                    'Content-Type':'application/json'
                }
            });
        };






}