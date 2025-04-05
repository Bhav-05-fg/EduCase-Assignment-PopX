import { useState } from "react";
import { useNavigate } from "react-router";

function LoginScreen({ formData }) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = () => {
        if (userData.email === formData.email && userData.password === formData.password) {
            navigate("/profile");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <section className="relative flex place-self-center bg-[#F7F8F9] h-[812px] w-[375px] p-[20px]">
            <form className="flex flex-col mt-[40px]" onSubmit={(e) => e.preventDefault()}>
                <header>
                    <h1 className="font-medium text-[28px] text-[#1D2226] h-[69px] w-[188px] mb-[14px] leading-[36px]">
                        Signin to your PopX account
                    </h1>
                    <h2 className="text-[18px] w-[232px] h-[48px] text-[#1D2226] opacity-60 mb-[33px] leading-[26px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </h2>
                </header>

                <div className="relative mb-[23px]">
                    <label htmlFor="email" className="absolute top-[-11px] left-[16px] h-[17px] w-[103px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        onFocus={()=>{setError("")}}
                        placeholder="Enter email address"
                        className="h-[40px] w-[335px] text-[14px] px-4 text-[#919191] rounded-md border-1 border-[#CBCBCB] focus:outline-none"
                        required
                    />
                </div>

                <div className="relative mb-[23px]">
                    <label htmlFor="password" className="absolute top-[-11px] left-[16px] h-[17px] w-[103px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        onFocus={()=>{setError("")}}
                        placeholder="Enter password"
                        className="h-[40px] w-[335px] text-[14px] px-4 text-[#919191] rounded-md border-1 border-[#CBCBCB] focus:outline-none"
                        required
                    />
                </div>

                {error && (
                    <p className="text-[#DD4A3D] text-sm mb-2">{error}</p>
                )}

                <button
                    type="button"
                    onClick={handleLogin}
                    className={`font-medium text-white text-[16px] w-[335px] h-[46px] rounded-md mb-[23px] hover:opacity-90 active:scale-99 transition-all duration-300 ease-in-out 
                        ${userData.email && userData.password
                            ? "bg-[#6C25FF] cursor-pointer"
                            : "bg-[#CBCBCB] cursor-not-allowed"
                        }`}
                    disabled={!userData.email || !userData.password}
                >
                    Login
                </button>
            </form>
        </section>
    );
}

export default LoginScreen;
