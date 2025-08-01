import Sqlite from 'nativescript-sqlite';
class subjects{



async create_table(){
await new Sqlite('classmate.db').then(db=>{
db.execSQL("CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_id INTEGER, name TEXT, short_hand TEXT, description TEXT, type TEXT, icon TEXT)");
}).catch(error=>{console.log(error)});
}




async insert(subject_id,name, short_hand, description, type, icon){
await new Sqlite('classmate.db').then(db=>{
db.execSQL("INSERT INTO subjects (subject_id, name, short_hand, description, type, icon) VALUES (?,?,?,?,?,?)",
[subject_id, name,short_hand,description,type,icon]);
}).catch(error=>{console.log(error)});

}



async getAll(){
await new Sqlite('classmate.db').then(db=>{
return db.all("SELECT * FROM subjects").then(rows => {
let subjects = [];
for (let row of rows) {
subjects.push({
id: row[0],
name: row[1],
short_hand: row[2],
description: row[3],
type: row[4],
icon: row[5]
});
}
return subjects;
});
});
}













}

export default subjects;