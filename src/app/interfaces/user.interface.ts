export interface User {
    uuid:number;
    firstName:string;
    lastName:string;
    email:string;
    username:string;
    gender:string;
    address:string;
    dateOfBirth:string;
    phone:string;
    imageUrl:string;
    coordinate: Coordinate;
}

export interface Coordinate{
    latitude:number;
    longitude:number;
}

export interface Info{
    seed:string;
    results:number;
    page:number;
    version:string;
}

export interface UsersResponse{
    info:Info;
    results:any[];
}