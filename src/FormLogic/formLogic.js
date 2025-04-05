import { useEffect, useState } from "react";

export function useSignupForm() {
    const [formData, setFormData] = useState({
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "",
    });
  
    const [isFormValid, setIsFormValid] = useState(false);
  
    useEffect(() => {
      const { fullName, phone, email, password, agency } = formData;
      setIsFormValid(fullName && phone && email && password && agency );
    }, [formData]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
    return { formData, setFormData, isFormValid, handleChange };
  }
  