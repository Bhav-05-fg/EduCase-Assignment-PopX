import { useEffect } from "react";
import { useNavigate } from "react-router";

function SignupScreen({ formData, isFormValid, handleChange, setFormData }) {
    useEffect(() => {
        setFormData({
            fullName: "",
            phone: "",
            email: "",
            password: "",
            company: "",
            agency: "",
        });
    }, []);

    const navigate = useNavigate();

    return (
        <main className="relative flex place-self-center bg-[#F7F8F9] h-[812px] w-[375px] p-[20px]">
            <section className="flex flex-col mt-[40px]">
                <header>
                    <h1 className="font-medium text-[28px] text-[#1D2226] h-[69px] w-[188px] mb-[14px] leading-[36px]">
                        Create your PopX account
                    </h1>
                    <p className="text-[18px] w-[232px] h-[48px] text-[#1D2226] opacity-60 mb-[33px] leading-[26px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                </header>

                <form>
                    {/* Full Name */}
                    <div className="relative mb-[23px]">
                        <label htmlFor="fullName" className="absolute top-[-11px] left-[16px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">
                            Full name <span className="text-[#DD4A3D]">*</span>
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            required
                            type="text"
                            placeholder="Enter full name"
                            onChange={handleChange}
                            className="h-[40px] w-[335px] text-[13px] px-4 text-[#919191] rounded-md border border-[#CBCBCB] focus:outline-none"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="relative mb-[23px]">
                        <label htmlFor="phone" className="absolute top-[-11px] left-[16px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">
                            Phone number <span className="text-[#DD4A3D]">*</span>
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            required
                            type="text"
                            placeholder="Enter phone number"
                            onChange={handleChange}
                            className="h-[40px] w-[335px] text-[13px] px-4 text-[#919191] rounded-md border border-[#CBCBCB] focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative mb-[23px]">
                        <label htmlFor="email" className="absolute top-[-11px] left-[16px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">
                            Email Address <span className="text-[#DD4A3D]">*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            required
                            type="email"
                            placeholder="Enter email address"
                            onChange={handleChange}
                            className="h-[40px] w-[335px] text-[13px] px-4 text-[#919191] rounded-md border border-[#CBCBCB] focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative mb-[23px]">
                        <label htmlFor="password" className="absolute top-[-11px] left-[16px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">
                            Password <span className="text-[#DD4A3D]">*</span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            required
                            type="password"
                            placeholder="Enter password"
                            onChange={handleChange}
                            className="h-[40px] w-[335px] text-[13px] px-4 text-[#919191] rounded-md border border-[#CBCBCB] focus:outline-none"
                        />
                    </div>

                    {/* Company Name (Optional) */}
                    <div className="relative mb-[18px]">
                        <label htmlFor="company" className="absolute top-[-11px] left-[16px] px-[5px] pb-[2px] bg-[#F7F8F9] text-[13px] text-[#6C25FF]">
                            Company name
                        </label>
                        <input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Enter company name"
                            onChange={handleChange}
                            className="h-[40px] w-[335px] text-[13px] px-4 text-[#919191] rounded-md border border-[#CBCBCB] focus:outline-none"
                        />
                    </div>

                    {/* Radio Buttons */}
                    <fieldset className="mb-[23px]">
                        <legend className="text-[13px]">
                            Are you an Agency? <span className="text-[#DD4A3D]">*</span>
                        </legend>
                        <div className="flex gap-[23px] mt-[8px]">
                            <label className="flex items-center gap-1 text-[14px] text-[#1D2226]">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="yes"
                                    checked={formData.agency === "yes"}
                                    onChange={handleChange}
                                    className="h-[22px] w-[22px] mr-[8px] accent-[#6C25FF]"
                                />
                                Yes
                            </label>
                            <label className="flex items-center gap-1 text-[14px] text-[#1D2226]">
                                <input
                                    type="radio"
                                    name="agency"
                                    value="no"
                                    checked={formData.agency === "no"}
                                    onChange={handleChange}
                                    className="h-[22px] w-[22px] mr-[8px] accent-[#6C25FF]"
                                />
                                No
                            </label>
                        </div>
                    </fieldset>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={() => {
                            navigate("/profile", { replace: true });
                        }}
                        disabled={!isFormValid}
                        className={`absolute text-white bottom-7.5 font-medium text-[16px] w-[335px] h-[46px] rounded-md hover:opacity-90 active:scale-99 transition-all duration-300 ease-in-out ${isFormValid ? "bg-[#6C25FF]" : "bg-[#CBCBCB]"
                            }`}
                    >
                        Create Account
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignupScreen;
