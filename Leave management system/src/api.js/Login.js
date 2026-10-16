

export function LoginSubmitData(data){
    return fetch("http://localhost:8000/worktracker/login/",{
     method:"POST",
     headers:{
          "Content-Type":"application/json",
     },
     body:JSON.stringify(data),
    })
     .then(
        (response)=>{
       return response.json();
        } 
     )
     .catch(()=>{
console.log("Api call failed");
     }
     )
}