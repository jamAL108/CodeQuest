'use client';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyCookie } from "../../redux/action";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import Component from './component'

const Dashboard: React.FC = () => {
  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const [cookies, removeCookie] = useCookies([]);
  // const [navshow,setnavshow] = useState<boolean>(false)

  useEffect(() => {
    document.title = "codeQuest - Dashboard";
    return () => {
      document.title = "codeQuest";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(verifyCookie(router, removeCookie, true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [flag, setflag] = useState(0);
  // useEffect(() => {
  //   const DashboardIndex: string | null = localStorage.getItem(
  //     "codeQuestDashboardIndex"
  //   );
  //   const Extracted_Object: DashboardIdx | null = DashboardIndex ? JSON.parse(DashboardIndex) : null
  //   if (!Extracted_Object) {
  //     const temp: DashboardIdx={
  //       flag: 0
  //     };
  //     localStorage.setItem("codeQuestDashboardIndex", JSON.stringify(temp));
  //   }else{
  //     setflag(Extracted_Object.flag)
  //   }
  // }, []);

  // const flagchange = (str: string) => {
  //   let elem = 0;
  //   if (str === "activities") {
  //     setflag(0);
  //   } else if (str === "settings") {
  //     setflag(1);
  //     elem =1;
  //   }else if(str ==="addsection"){
  //     setflag(2)
  //     elem =2
  //   }
  //   const temp: DashboardIdx={
  //     flag: elem
  //   };
  //   localStorage.setItem("codeQuestDashboardIndex", JSON.stringify(temp));
  // };

  // const navchange = (flag:boolean)=>{
  //   setnavshow(flag)
  // }

  return (
    <Component/>
  );
};

export default Dashboard;
