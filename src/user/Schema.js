import * as Yup from "yup"
import { object, string, number, date, InferType } from 'yup';

export const signUpSchema=Yup.object({
    name:string().min(3).max(20).required("please enter your name"),
    email: string().email().required("please enter email"),
    password:string().min(6).required("please enter password"),
    Cpassword:string().required("password must match").oneOf([Yup.ref("password"),null],"password must match"),
    terms:Yup.boolean().oneOf([true],'Please accept terms and conditons')
})