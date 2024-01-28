'use client';
import clientConnectionWithSupabase from '@/lib/supabase/client'

const storeNewUserDataFunction = async (formdata:any) => {
     
    const supabase = await clientConnectionWithSupabase()
    const { data, error } = await supabase
    .from('codeQuestUser')
    .insert([
      { email: formdata.email, firstName: formdata.firstName , organization:formdata.organization , typeOfWork:formdata.typeOfWork , lastName:formdata.lastName },
    ])
    .select()
  
    console.log(data)
    console.log(error)
    console.log(formdata) 
  }
  
  export default storeNewUserDataFunction