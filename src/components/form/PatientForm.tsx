"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"

import CustomForm from "./CustomForm"
import { Children, useState } from "react"
import SubmitButton from "../SubmitButton"
import { UserFormValidation } from "@/lib/validation"


export enum FormFieldType{
  INPUT="input",
  TEXT_AREA='textarea',
  PHONE_INPUT='phoneinput',
  CHECKBOX ="checkbox",
  DATE_PICKER="datepicker",
  SELECET = "select",
  SKELETON="skeleton"

}
 
const formSchema = z.object({
  name: z.string().min(7, {
    message: "Username must be at least 2 characters.",
  }),
  
})
 
 function PatientForm() {
  const [isloading,setIsLoading]=useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:""
    
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserFormValidation>) {
   
    console.log(values)
  }
  return (
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi There</h1>
            <p className="text-dark-700">Schedule your first appointement</p>
        </section>
        <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.INPUT} 
        name={"name"} 
        label="Name" 
        placeholder="Enter your name" 
        iconsrc="/assets/icons/user.svg"/>

        <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.INPUT} 
        name={"email"} 
        label="Email" 
        placeholder="manoj123@gmail.com " 
        iconsrc="/assets/icons/email.svg"/>

        <CustomForm 
        control={form.control} 
        fieldType={FormFieldType.PHONE_INPUT} 
        name={"phone"} 
        label="Phone Number" 
        placeholder="(+91)9292929" 
        />

        <SubmitButton isloading={isloading} >Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientForm