import { Http} from "@nativescript/core";
import { key } from "../database/connection";
import * as ApplicationSettings from '@nativescript/core/application-settings';


class Auth{

async loginApi(email, password) {
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/token?grant_type=password',
method: 'POST',
headers: {
'Content-Type': 'application/json',
'apikey': key
},
content: JSON.stringify({
email: email,
password: password
})
});
}






async signupApi(fname,lname, email, password) {
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/signup',
method: 'POST',
headers: {
'Content-Type': 'application/json',
'apikey': key
},
content: JSON.stringify({
email: email,
password: password,
data: {
first_name: fname,
last_name: lname,
gender:'',
dob:'',
tel:'',
class:'',
school:'',
profile_pic:'',
profile_status:'registered',
role:'student'
}
})
});
}



async getUserApi(token) {
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/user',
method: 'GET',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
}
});
}


async updateUserMetadata(input) {
const auth=new Auth();
const token=await auth.refreshToken();
return await Http.request(
{
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/user',
method: 'PUT',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
},
content: JSON.stringify({
data: {
gender:input.gender,
dob:input.day+'-'+input.month+'-'+input.year,
tel:input.tel,
class:input.class,
school:input.school,
profile_status:'completed'
}
})
});


}


async getUserObject(){
const token= ApplicationSettings.getString('access_key',null);
const auth=new Auth;
const user=[];
await auth.getUserApi(token)
.then((response)=>{
const data=JSON.parse(response.content);
if(data.code==403){
return;
}
user.push(data.user_metadata);
})
.catch((error)=>{console.log(error);});
return user;
}




async userSession() {
const token = ApplicationSettings.getString('access_token',null);
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/user',
method: 'GET',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
}
});
}


async logoutApi(){
const token = ApplicationSettings.getString('access_token',null);
return await Http.request(
{
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/logout',
method: 'GET',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
}
}
);
}





async secureToken(){
const token = ApplicationSettings.getString('access_token',null);
const auth=new Auth();
let tkn=null;
try {
const res=await auth.getUserApi(token);
if(res.statusCode==200){
tkn=token;
}else{
const auth = new Auth();
const ref_token=await auth.tokenRefresh();

console.log(ref_token);

}
} catch (error) {
console.log(error);
}
}


async tokenRefresh(){
const ref_token=ApplicationSettings.getString('refresh_token',null);
return await Http.request({
    url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/token?grant_type=refresh_token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': key
    },
    content: JSON.stringify({
      refresh_token: ref_token
    })
  });

}





//use before making any request
async refreshToken(){
    const token=ApplicationSettings.getString('access_token',null);
    try{
    const auth = new Auth();
    const check = await auth.getUserApi(token);
    const statusCode=check.statusCode;
    if(statusCode==200){
    return token;
    }else if(statusCode==403){
    let newToken=await auth.tokenRefresh();
    if(newToken.statusCode==200){
    newToken=JSON.parse(newToken.content);
    newToken=newToken.access_token;
return newToken;
    }else{
    console.log(newToken.statusCode);
    }
    }
    } catch(error){
    console.log(error);
    }

    }













}
export default Auth;