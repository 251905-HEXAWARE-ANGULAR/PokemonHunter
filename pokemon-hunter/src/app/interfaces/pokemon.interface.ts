//An Interface in Angular is more like a Java Model class than a Java Interface
//The role of an Angular interface is to MODEL some data. It's like we're making a custom data type
export interface Pokemon {
    id:number;
    name:string;
    sprite:string;
    types?:object[]; //this one is optional because it might be too much work
}