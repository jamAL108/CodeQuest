const URL= "http://localhost:6000";
const Origin = "http://localhost:3000"

export const verifyCookie = (navigate ,removeCookie) =>async(dispatch)=>{
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
            if (!msg.status) {
              removeCookie("token");
              navigate("/login");
            } else {
                
            }
          } catch (err) {
            console.log(err);
          }
  }