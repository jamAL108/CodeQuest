'use server';

import createSupabaseServerClient from '../lib/supabase/server'

export const signupWithEmailPassword = async (formdata: {
    email: string,
    password: string
}) => {
    const supabase = await createSupabaseServerClient()
    const result = await supabase.auth.signUp({
        email: formdata.email,
        password: formdata.password,
    })
    return JSON.stringify(result)
}

export const signinWithEmailPassword = async (formdata: {
    email: string,
    password: string
}) => {
    const supabase = await createSupabaseServerClient()
    const result = await supabase.auth.signInWithPassword({
        email: formdata.email,
        password:formdata.password
    })
    console.log(result)
    if(result.error!==null){
    return JSON.stringify(result)
    }
    let { data: codeQuestUser, error } = await supabase.from('codeQuestUser').select("*").eq('email', formdata.email)
    console.log(codeQuestUser)
    return JSON.stringify(codeQuestUser)
}