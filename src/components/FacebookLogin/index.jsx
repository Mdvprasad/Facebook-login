import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
function FbLogin() {
    const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const [name, setName] = useState("");
    const [login, setLogin] = useState(false);
    const [picture, setPicture] = useState('');
    const responseFacebook = (response) => {
        console.log("response from fb", response);
        setName(response.name);
        setPicture(response.picture.data.url);
        if (response.accessToken) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    return (
        <>
            <div>
                <div>
                    {!login &&
                        <FacebookLogin
                            appId={appId}
                            autoLoad={true} //change autoLoad to false if the component should be rendered on first instance
                            fields="name,email,picture"
                            scope="public_profile,user_friends"
                            callback={responseFacebook}
                            icon="fa-facebook"
                            display="page"
                        />
                    }
                    {login && <>
                        <img src={picture} style={{ borderRadius: "50%" }} /><br />
                        <button style={{ backgroundColor: "#0066cc", padding: "10px" }}>{name}</button>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default FbLogin