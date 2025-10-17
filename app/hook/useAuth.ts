import { useState } from "react";
import type { validationRegisterType,validationZodType } from "../../types/typesOfZod";

export const useAuth = () => {

 const [loginAuth, setLoginAuth] = useState<validationZodType>({ email: "", senha: "" });

const [registerAuth, setRegisterAuth] = useState<validationRegisterType>({
  email: "",
  senha: "",
  firstName: "",
  lastName: "",
  name: "",
});

    const [loading, setLoading] = useState(false);

  function handleLoginChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setLoginAuth((prev) => ({ ...prev, [name]: value })) 
  }

  function handleRegisterChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
     setRegisterAuth((prev) => ({ ...prev, [name]: value }))
  }


  return {
    loginAuth,
    registerAuth,
    handleLoginChange,
    handleRegisterChange,
    loading,
    setLoading,
  };

};