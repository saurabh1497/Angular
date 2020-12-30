export class user {
    userID: number; // Always keep a class and not primitive data-types
    emailId : String;
    userName : String;
    password : String;
    role : {
        roleID : number;
        Role : String;
    };
    post : {
        postID : number;
        designation : String;
        department : String;
        level : number;
    }
}

export class EventM {
    eventID : number;
    eventName : String;
    action : Boolean;
    countOfPanel : number;
    skillSet : String;
    date : String;
    entryCount : number;
    escTime : String;
    post : {
        postID : number;
        designation : String;
        department : String;
        level : number;
    }
    status : String;

}