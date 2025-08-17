import { Http, } from "@nativescript/core";
import { key } from "../database/connection";
class topicApi{

async getTopic(id){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/topic?select=*,sub_topic(id,name,description),subject(name)&id=eq.'+id,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});






}



















}
export default topicApi;