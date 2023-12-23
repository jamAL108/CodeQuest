export interface signupInterface{
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    confirmPassword:string,
    organization:string,
    typeOfWork:string
    termsncontd:boolean
}

export interface signinInterface{
    email:string,
    password:string
}

export interface user{
    _id:string
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    organization:string,
    typeOfWork:string,
}

export interface dashboardNavProps{
    flagfun: (arg: string) => void,
    flag:number,
    navshow:boolean,
    navchange: (flag:boolean) => void,
}

export interface DashboardIdx{
    flag:number
}

export  interface Sections{
    name:string,
    jobID:string,
    roleType:string,
    dueDate:string,
    status?:boolean,
    description:string,
    content?:[]
}

export interface SettingsInput{
    text:string,
    readonly:boolean,
    
}