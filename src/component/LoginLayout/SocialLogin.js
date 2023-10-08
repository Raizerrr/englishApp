import classNames from "classnames/bind";
import LoginLayoutScss from "./LoginLayout.module.scss";
import { useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";  
import generateRandomCode from "../../extra/algorithms/generateCode";
import { register } from "../../axios/userAxios";

const cx = classNames.bind(LoginLayoutScss);

export const SocialLogin = () => {

    const handleSuccessOauth = async(credentialResponse) => {
        var decoded = jwt_decode(credentialResponse.access_token);
        const loginWithSocial = {
            email: decoded.email,
            password: generateRandomCode(20),
            username: decoded.family_name+decoded.given_name,
            avatar: decoded.picture
        }


        await register(loginWithSocial);
    }

    const handleErrorOauth = (error) => {
        console.log(error);
    }

    const login = useGoogleLogin({
        onSuccess:  tokenResponse =>  handleSuccessOauth(tokenResponse),
        onError: error => handleErrorOauth(error)
    })
    
    return (
        <>
            <div className={cx("line-contaner", "position-relative", "mt-2")}>
            <div className={cx("text-container", "px-2")}>Hoặc</div>
            <div className={cx("straight-line")}></div>
            </div>
            <div
                className={cx(
                    "d-flex",
                    "justify-content-between",
                    "align-items-center"
                )}
                >
                <button
                    className={cx(
                    "sign-in-by-social",
                    "facebook-color",
                    "py-3",
                    "rounded-4",
                    "w-50",
                    "me-3"
                    )}
                >
                    FaceBook
                </button>
                
                    <button
                        className={cx(
                        "sign-in-by-social",
                        "google-color",
                        "py-3",
                        "rounded-4",
                        "w-50",
                        "ms-3"
                        )}
                        onClick={() => login()}
                    >
                        Google
                    </button>
                </div>
        </>
    )
}