import { useNavigate } from "react-router";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <main className="relative flex place-self-center bg-[#F7F8F9] h-[812px] w-[375px] p-[20px]">
            <section className="flex flex-col gap-2.5 absolute bottom-0">

                <h1 className="font-medium text-[28px] text-[#1D2226] h-[33px] w-[231px]">
                    Welcome to PopX
                </h1>
                <p className="text-[18px] w-[232px] h-[48px] text-[#1D2226] opacity-60 mb-[29px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <button
                    type="button"
                    onClick={() => { navigate("/signup") }}
                    className="font-medium text-[16px] w-[335px] h-[46px] bg-[#6C25FF] text-white rounded-md cursor-pointer hover:opacity-90 active:scale-99 transition-all duration-200 ease-in-out">
                    Create Account
                </button>

                <button
                    type="button"
                    onClick={() => { navigate("/login") }}
                    className="font-medium text-[16px] w-[335px] h-[46px] mb-[41px] bg-[#6C25FF4B] rounded-md cursor-pointer hover:opacity-90 active:scale-99 transition-all duration-300 ease-in-out">
                    Already Registered? Login
                </button>

            </section>
        </main>
    );
}

export default LandingPage;
