/* eslint-disable react/prop-types */
import mobileImg from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImg from "./assets/images/illustration-sign-up-desktop.svg";
import check from "./assets/images/icon-success.svg";

function MainContent({ email, validate, setEmail, error }) {
    return (
        <main
            className="overflow-auto max-w-[58rem] md:rounded-[36px] 
         bg-white flex flex-col md:flex-row-reverse justify-center items-center md:p-8 md:m-8"
        >
            <div className="flex justify-center md:justify-end md:flex-2">
                <picture>
                    <source
                        media="(min-width: 38.75rem )"
                        srcSet={desktopImg}
                    />
                    <img src={mobileImg} alt="" width={375} height={284} />
                </picture>
            </div>
            <div className="my-8 mx-6 flex flex-col justify-center gap-6 md:pe-8">
                <h1 className="text-2xl md:text-4xl font-bold text-left">
                    Stay updated!
                </h1>
                <p className="text-left">
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className="flex flex-col gap-2">
                    <li className="flex justify-items-start items-baseline">
                        <img src={check} alt="" className="check aspect-auto" />
                        <p className="ms-4 text-left">
                            Product discovery and building what matters
                        </p>
                    </li>
                    <li className="flex justify-items-start items-baseline">
                        <img src={check} alt="" className="check aspect-auto" />
                        <p className="ms-4 text-left">
                            Measuring to ensure updates are a success
                        </p>
                    </li>
                    <li className="flex justify-items-start items-baseline">
                        <img src={check} alt="" className="check aspect-auto" />
                        <p className="ms-4 text-left">And much more!</p>
                    </li>
                </ul>
                <form
                    className="flex flex-col justify-items-start gap-4 py-4"
                    noValidate
                    onSubmit={validate}
                >
                    <label htmlFor="email" className="text-left">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                        placeholder="email@company.com"
                        aria-labelledby="error"
                        className="border-slate-100 border-2 py-4 px-2 rounded-lg placeholder-slate-700"
                    />
                    <p
                        id="error"
                        className={`${
                            error ? "block" : "hidden"
                        } text-red-600 text-left`}
                    >
                        Email is not valid{" "}
                    </p>
                    <button
                        type="submit"
                        className=" bg-[#242742] text-white py-4  
                         focus:bg-gradient-to-r from-[#ff6a3a] to-[#ff523a]
                         hover:bg-gradient-to-r from-[#ff6a3a] to-[#ff523a]"
                    >
                        Subscribe to monthly newsletter
                    </button>
                </form>
            </div>
        </main>
    );
}

export default MainContent;
