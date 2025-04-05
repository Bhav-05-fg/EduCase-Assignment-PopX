function Profile({formData}){

    return(
        <main className="relative place-self-center bg-[#F7F8F9] h-[812px] w-[375px]">
            <header className="bg-[#FFFFFF] shadow-[0px_3px_6px_#00000007] h-[68px] w-[375px]">
                <h1 className="text-[#1D2226] pl-[20px] pt-[27px]">Account Settings</h1>
            </header>

            <section className="h-fit border-b-1 border-dashed border-[#CBCBCB] pl-[20px] pb-[19px] pt-7.5">
                <div className="flex mb-7.5">
                    <div className="relative w-fit h-fit mr-5">
                        <img
                            src="pfp.png"
                            alt="User profile"
                            loading="lazy"
                            className="h-[76px] w-[76px]"
                        />
                        <img
                            src="camera-icon.svg"
                            alt="Change profile picture"
                            className="absolute bottom-1 -right-1 h-[21px] w-[23px] cursor-pointer"
                        />
                    </div>
                    <div>
                        <h2 className="h-[18px] font-medium text-[15px] capitalize text-[#1D2226] mb-[4px]">
                            {formData.fullName ? formData.fullName : "Marry Doe"}
                        </h2>
                        <p className="h-[17px] text-[14px] text-[#1D2226] leading-[26px]">
                            {formData.email ? formData.email : "Marry@Gmail.com"  }
                        </p>
                    </div>
                </div>
                <p className="text-sm text-[#1D2226]">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </section>

            <footer className="absolute bottom-0 h-9 w-full border-t-1 border-dashed border-[#CBCBCB]" />
        </main>
    )
}
export default Profile;