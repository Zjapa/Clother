import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/SignUp/SignUp';
import './SignIn.stlyes.scss';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <div className='sign-in-container'>
                    <h1>SignIn</h1>
                    <button onClick={logGoogleUser}>Sign in with Google</button>
                </div>
                <SignUp />
            </div>
        </div>
    );
};

export default SignIn;
