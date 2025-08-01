import { Http, } from "@nativescript/core";
import { key } from "../database/connection";


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
email: email.trim(),
password: password.trim()
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
last_name: lname
}
})
});
}



async getUser(token) {
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