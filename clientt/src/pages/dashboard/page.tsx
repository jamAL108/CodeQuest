import "../../scss/dashboard/dashboard.css";
import Nav from "./nav";
import React, { useState, useEffect } from "react";
import Activities from "./activities";
import Settings from "./settings";
import { useNavigate } from "react-router-dom";
import { verifyCookie } from "../../redux/action";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { DashboardIdx } from "../../interface/interface";
import Addsection from "./addsection";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    function handleResize() {
      window.location.reload();
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update document title when component mounts
    document.title = "codeQuest - Dashboard";
    // Clean up document title when component unmounts
    return () => {
      document.title = "codeQuest";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(verifyCookie(navigate, removeCookie, true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [flag, setflag] = useState(0);
  useEffect(() => {
    const DashboardIndex: string | null = localStorage.getItem(
      "codeQuestDashboardIndex"
    );
    const Extracted_Object: DashboardIdx | null = DashboardIndex ? JSON.parse(DashboardIndex) : null
    if (!Extracted_Object) {
      alert("hello")
      const temp: DashboardIdx={
        flag: 0
      };
      localStorage.setItem("codeQuestDashboardIndex", JSON.stringify(temp));
    }else{
      setflag(Extracted_Object.flag)
    }
  }, []);

  const flagchange = (str: string) => {
    let elem = 0;
    if (str === "activities") {
      setflag(0);
    } else if (str === "settings") {
      setflag(1);
      elem =1;
    }else if(str ==="addsection"){
      setflag(2)
      elem =2
    }
    const temp: DashboardIdx={
      flag: elem
    };
    localStorage.setItem("codeQuestDashboardIndex", JSON.stringify(temp));
  };

  return (
    <div className="dashboard">
      <Nav flagfun={flagchange} flag={flag} />
      {flag === 0 && <Activities />}
      {flag === 1 && <Settings />}
      {flag===2 && <Addsection/>}
    </div>
  );
};

export default Dashboard;
