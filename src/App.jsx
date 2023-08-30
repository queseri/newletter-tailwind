import { useEffect, useState } from "react";
import "./App.css";

import Aside from "./Aside";
import MainContent from "./MainContent";

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
                <MainContent
                    email={email}
                    validate={validate}
                    error={error}
                    setEmail={setEmail}
                />
            )}
        </>
    );
}

export default App;
