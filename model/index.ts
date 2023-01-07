// Document interface
export type User = {
    id: string
    name: string
    password: string
    email: string
    acount?:string 
  
  }|  {};

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