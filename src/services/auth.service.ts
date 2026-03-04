import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";
const JWT_SECRET = process.env.JWT_SECRET!;
export async function registerUser(email:string,password:string){
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await prisma.user.create({
        data:{email,password:hashedPassword},
    })
    return user;

}
export async function loginUser(email:string,password:string){
    const user=await prisma.user.findUnique({where:{email}})
    if(!user)throw new Error("Invalid Credentials")
    const isValid=await bcrypt.compare(password,user.password)
if(!isValid)throw new Error("Invalid Credentials")

    return jwt.sign({userId:user.id},JWT_SECRET,{expiresIn:"1h"});

}


