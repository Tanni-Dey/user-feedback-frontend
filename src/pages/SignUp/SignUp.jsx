import { auth } from "../../utils/firebase";
import CustomForm from "../../components/form/CustomForm";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  return (
    <div>
      <CustomForm
        apiMethod="post"
        url={"/user"}
        userAuth={createUserWithEmailAndPassword}
        loading={loading}
        firebaseError={error}
        formTitle="Sign Up"
        buttonText="Sign Up"
      />
    </div>
  );
};

export default SignUp;
