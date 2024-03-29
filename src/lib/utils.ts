import { type ClassValue, clsx } from "clsx"
import { Princess_Sofia } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { urlToHttpOptions } from "url"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(
  price : number | string ,
  options:{
    currency?:"USD" | "EUR" | "GBP"  | "BDT" ,
   notation?:Intl.NumberFormatOptions["notation"]

  }={}
){
  const {currency = "USD" , notation = 'compact' } = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price 

  return new Intl.NumberFormat("en-us" , {
    style:"currency",
    currency,
    notation , 
    maximumFractionDigits:2,
  }).format(numericPrice)
}