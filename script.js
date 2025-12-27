class YoutubeChannel{
    constructor(){
        this.subscribers = [];
    }

    subscribe(user){
        this.subscribers.push(user);
        user.update(`${user.name} ,Subscribed to channel`);
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== user);
        user.update(`${user.name} ,un-subscribed to channel`);
    }

    notify(videoTitle){
        this.subscribers.forEach(subscriber => subscriber.update(videoTitle));
    }
}

class user{
    constructor(name){
        this.name = name;
    }
    update(message){
        console.log(`Notification for ${this.name}: ${message}`);
    }
}


let sheryians = new YoutubeChannel();
let user1 = new user("Avishek");
let user2 = new user("Rohit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.notify("New video uploaded: JavaScript Design Patterns");

sheryians.unsubscribe(user1);
sheryians.notify("New video uploaded: Observer Pattern in JavaScript");