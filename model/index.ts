export type User ={
    id:string,
    name : string,
    email : string,
    password : string,
    image : string,
    coverImage : string,
}

export type Product ={
    createdBy:string,
    title:string,
    description:string,
    rating:string,
    comments:[string]
}

export type Comment ={
    createdBy:string,
    content:string,
}