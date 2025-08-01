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
















}
export default Auth;