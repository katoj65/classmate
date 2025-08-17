import { Http, } from "@nativescript/core";
import { key } from "../database/connection";

class subjectApi{

async getAll(){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/class?select=*,subject(name,description,id,type,icon,short_hand)',
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});
}


async getSubject(id){
return await Http.request({
url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/subject?select=name,id,topic(name,description,id)&id=eq.'+id,
method: 'GET',
headers: {
'apikey':key,
'Authorization': 'Bearer'+key,
'Content-Type': 'application/json'
}
});
}



async getSubjects(){
    return await Http.request({
    url: 'https://ycmlubeulbufsfrvbmal.supabase.co/rest/v1/subject?select=*,topic(name,description,id)&id=eq.1',
    method: 'GET',
    headers: {
    'apikey':key,
    'Authorization': 'Bearer'+key,
    'Content-Type': 'application/json'
    }
    });
    }








}

export default subjectApi;