'use server';
import React from 'react'
import Component from './component'
import { senditToMain } from '@/auth/tokenCheckServer'
const Page = async() => {
  await senditToMain()
  return (
    <Component/>
  )
}

export default Page