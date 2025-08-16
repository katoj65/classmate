import { Http, } from "@nativescript/core";
import { key } from "../database/connection";
class topicApi{

async getTopic(id){

return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=name,subject(name,topic(name))&name=eq.'+id,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});






}



















}