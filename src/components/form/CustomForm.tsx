"use client"
import React from 'react'

import { Input } from "@/components/ui/input"
import PhoneInput from 'react-phone-number-input'

 
import { zodResolver } from "@hookform/resolvers/zod"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { any, z } from "zod"
import { Control, Field } from 'react-hook-form'
import { FormFieldType } from './PatientForm'
import Image from 'next/image'
import 'react-phone-number-input/style.css'

interface propType {
    control:Control<any>,
    fieldType:FormFieldType,
    name:string,
    label?:string,
    placeholder?:string,
    iconsrc?:string,
    iconalt?:string,
    disabled?:boolean,
    dateFormat?:string,
    showTimeSelect?:string,
    renderSkeleton?:(field:any)=>React.ReactNode

}
const RenderField=({props,field}:{props:propType,field:any})=>{
  const {placeholder,fieldType,iconsrc,iconalt}=props
  switch(fieldType) {
  case (FormFieldType.INPUT):
      return (
      <div className='flex rounded-md border-dark-500 bg-dark-400 '>
        {iconsrc && (
        <Image
        src={iconsrc}
        height={24}
        width={24}
        className="ml-2"
        alt={iconalt || "icon"}
        />)
        }
        <FormControl>
          <Input placeholder={placeholder}{...field}
          className='shad-input border-0'/>
        </FormControl>

      </div>
      )
      case (FormFieldType.PHONE_INPUT):
        return(
          
            <FormControl>
              <PhoneInput
              defaultCountry='IN'
              placeholder={placeholder}
              international
              withCountryCallingCode
              value={field.value as undefined}
              onChange={field.onChange}
              className='input-phone'
              />
            </FormControl>

  
        )
  
  
    break;
  
    default:
    // code block
}}

const CustomForm = (props:propType) => {
  const{control,name,label,fieldType}=props
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className='flex-1'>
              {fieldType !== FormFieldType.CHECKBOX && label && 
              <FormLabel>{label}</FormLabel>}
              <RenderField props={props} field={field}/>
            </FormItem>
          )}
        />
  )
}

export default CustomForm