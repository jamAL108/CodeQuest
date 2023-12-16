import * as action from "./actionTypes.js";

const URL = "http://localhost:8000/api";
const Origin = "http://localhost:3000";

export const verifyCookie =
  (navigate, removeCookie, flag) => async (dispatch) => {
    try {
      const data = await fetch(URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: Origin,
        },
      });
      const msg = await data.json();
      if (data.status === 400) {
        // removeCookie("token");
        const codeQuestUSER = localStorage.getItem("codeQuestUSER");
        if (codeQuestUSER) {
          localStorage.removeItem("codeQuestUSER");
        }
        if (flag === true) {
          navigate("/auth/signin");
        }
      } else {
        localStorage.setItem("codeQuestUSER", JSON.stringify(msg?.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

export const signup = (formdata, navigate) => async (dispatch) => {
  try {
    const data = await fetch(`${URL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Origin: Origin,
      },
      body: JSON.stringify(formdata),
    });
    const msg = await data.json();
    if (data.status === 200) {
      navigate("/dashboard");
    } else {
      dispatch({ type: action.SIGNUPERROR, payload: msg.error });
    }
  } catch (err) {
    console.log(err);
  }
};

export const login = (formdata, navigate) => async (dispatch) => {
  try {
    console.log(formdata);
    const data = await fetch(`${URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Origin: Origin,
      },
      body: JSON.stringify(formdata),
    });
    const msg = await data.json();
    if (data.status === 200) {
      console.log("success");
      navigate("/dashboard");
    } else {
      console.log(msg.error);
      dispatch({ type: action.LOGINERROR, payload: msg.error });
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchSections = (formdata) => async (dispatch) => {
  try{
    const data = await fetch(`${URL}/fetchsections/${formdata?.id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Origin: Origin,
      }
    });
    const msg = await data.json();
    if (data.status === 200) {
      console.log(msg.data)
      dispatch({type:action.SECTIONS , payload:msg.data})
    } else {
      console.log(msg);
    }
  }catch(err){
    console.log(err)
  }
};
