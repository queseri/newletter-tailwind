import { useEffect, useState } from "react";
import "./App.css";
import mobileImg from "./assets/images/illustration-sign-up-mobile.svg";
import desktopImg from "./assets/images/illustration-sign-up-desktop.svg";
import check from "./assets/images/icon-success.svg";
import Aside from "./Aside";

function App() {
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [error, setError] = useState(false);

    const validate = (evt) => {
        evt.preventDefault();
        const regex =
            /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        setValidEmail(regex.test(email));
        if (!validEmail) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const reset = () => {
        setEmail("");
        setValidEmail(false);
        setError(false);
    };

    useEffect(() => {
        if (validEmail) {
            console.log("email is valid");
            console.log(error);
            setError(false);
        } else {
            console.log("try again with another email");
            // setError(true);
            console.log(error);
        }
    }, [validEmail, error]);
    return (
        <>
            {validEmail ? (
                <Aside email={email} reset={reset} />
            ) : (
                <main className="overflow-auto max-w-[58rem] md:rounded-[36px] mx-auto bg-white md:flex flex-row-reverse md:p-4 md:m-8">
                    <div className="flex justify-center md:justify-end">
                        <picture>
                            <source
                                media="(min-width: 38.75rem )"
                                srcSet={desktopImg}
                            />
                            <img src={mobileImg} alt="" />
                        </picture>
                    </div>
                    <div className="my-8 mx-6 flex flex-col justify-center gap-6">
                        <h1 className="text-2xl font-bold">Stay updated!</h1>
                        <p className="text-left">
                            Join 60,000+ product managers receiving monthly
                            updates on:
                        </p>
                        <ul className="flex flex-col gap-2">
                            <li className="flex justify-items-start items-baseline">
                                <img
                                    src={check}
                                    alt=""
                                    className="check aspect-auto"
                                />
                                <p className="ms-4 text-left">
                                    Product discovery and building what matters
                                </p>
                            </li>
                            <li className="flex justify-items-start items-baseline">
                                <img
                                    src={check}
                                    alt=""
                                    className="check aspect-auto"
                                />
                                <p className="ms-4 text-left">
                                    Measuring to ensure updates are a success
                                </p>
                            </li>
                            <li className="flex justify-items-start items-baseline">
                                <img
                                    src={check}
                                    alt=""
                                    className="check aspect-auto"
                                />
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
            )}
        </>
    );
}

export default App;

