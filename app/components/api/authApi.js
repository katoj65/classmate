import { Http} from "@nativescript/core";
import { key } from "../database/connection";
import { SecureStorage } from "@heywhy/ns-secure-storage";


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
profile_staus:'registered'
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
const secureStorage = new SecureStorage();
const session= await secureStorage.get({key:'access_token'});
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
profile_staus:'completed'
}
})
});


}


async getUserObject(){
const secureStorage = new SecureStorage();
const token=await secureStorage.get({key:'access_token'});
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
const secureStorage = new SecureStorage();
const token = await secureStorage.get({ key: 'access_token' }); 
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













}
export default Auth;