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
const session= ApplicationSettings.getString('access_token',null);
return await Http.request(
{
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/user',
method: 'PUT',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + session
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
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/logout',
method: 'GET',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
}
});
}





async secureToken(){
const token = ApplicationSettings.getString('access_token',null);

//Check if the token is expired.
const response = await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/user',
method: 'GET',
headers: {
'Content-Type': 'application/json',
'apikey': key,
'Authorization': 'Bearer ' + token
}
});

if(response.statusCode == 200){
return token;
}


// If token expired, refresh it.
const refresh = await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/auth/v1/token?grant_type=refresh_token',
method: 'POST',
headers: {
'Content-Type': 'application/json',
'apikey': key
}
});


console.log(refresh);

}












}
export default Auth;