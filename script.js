class Message {
  constructor(authorname,text) {
    this.authorname=authorname;
    this.text= text;
    this.time =new Date()
  }
  toString() {
    return `${this.time.getHours()}:${this.time.getMinutes()} ${this.authorname} ${this.text}`;
  }
}


class Messenger extends Message{
  constructor(authorname,text) {
    super(authorname,text)
    this.getValues=[]
  }
send(author,text){
this.authorname=author;
this.text=text;
this.getValues.push(`${this.time.getHours()}:${this.time.getMinutes()} ${this.authorname} ${this.text}`)
}
show_history(){
    this.getValues.forEach(item=>{
        console.log(item);
    })
}
}

let info=new Messenger()
info.send("Izzet","Salam");
info.send("Eli","Salam");
info.show_history()

