import check from "./assets/images/icon-success.svg";

// eslint-disable-next-line react/prop-types
function Aside({ email, reset }) {
    return (
        <aside className="h-screen md:p-6 sm:flex sm:justify-center sm:items-center">
            <div className="flex items-center h-[100%] max-h-[32.5rem] justify-between flex-col sm:rounded-[36px] sm:max-w-[31.5rem] gap-4 bg-white p-16">
                <div className="flex flex-col gap-6">
                    <div>
                        <img src={check} alt="" className="w-[64px] aspect-1" />
                    </div>
                    <h2 className="text-[#242742] text-left text-[2.5rem] md:text-[3.5rem] font-bold">
                        Thanks for subscribing!
                    </h2>
                    <p className="text-[#242742] text-left">
                        A confirmation email has been sent to {email}. Please
                        open it and click the button inside to confirm your
                        subscription
                    </p>
                </div>
                <button
                    className="bg-[#242742] text-white py-4 w-[100%]
                    focus:bg-gradient-to-r from-[#ff6a3a] to-[#ff523a]
                     hover:bg-gradient-to-r from-[#ff6a3a] to-[#ff523a]                    
                    "
                    onClick={reset}
                >
                    Dismiss message
                </button>
            </div>
        </aside>
    );
}

export default Aside;
