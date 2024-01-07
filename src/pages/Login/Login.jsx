import { auth } from "../../utils/firebase";
import CustomForm from "../../components/form/CustomForm";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  return (
    <div>
      <CustomForm
        userAuth={signInWithEmailAndPassword}
        loading={loading}
        firebaseError={error}
        formTitle="Login"
        buttonText="Login"
      />
    </div>
  );
};

export default Login;
