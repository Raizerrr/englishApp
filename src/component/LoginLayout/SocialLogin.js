import classNames from "classnames/bind";
import LoginLayoutScss from "./LoginLayout.module.scss";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";  
import generateRandomCode from "../../extra/algorithms/generateCode";
import { register } from "../../axios/userAxios";
import { useNavigate } from "react-router-dom";
import { LoginSocialFacebook } from "reactjs-social-login";
import { useUserContext } from "../../context/UserContext";

const cx = classNames.bind(LoginLayoutScss);

export const SocialLogin = () => {
    const navigate = useNavigate();
    const {registerUser} = useUserContext();

    const handleSuccessOauth = async(credentialResponse) => {
        var decoded = jwt_decode(credentialResponse.credential);
        const loginWithSocial = {
            email: decoded.email,
            password: generateRandomCode(20),
            username: decoded.family_name+decoded.given_name,
            avatar: decoded.picture,
            social: "social"
        }


        const {data} = await register(loginWithSocial);
        if(data.data.token || data.data.message==="This user is exist"){
            localStorage.setItem("token", JSON.stringify(data?.data?.token));
            await registerUser();
            navigate("/");
        }
    }

    const handleErrorOauth = (error) => {
        console.log(error);
    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
    
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
                    <LoginSocialFacebook
                        appId="6688137194635021"
                        autoLoad={true}
                        onResolve={(response) => {
                            console.log(response);
                        }}
                        
                        onReject={(error) => {
                            console.log(error);
                        }}
                    >
                        FaceBook
                        
                    </LoginSocialFacebook>
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
                    >
                        Google
                        <GoogleLogin 
                            onSuccess={handleSuccessOauth}
                            onError={handleErrorOauth}
                        />
                    </button>

                </div>
        </>
    )
}