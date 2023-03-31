import { SignUp } from "@clerk/remix";

export default function SignUpPage(): JSX.Element {
  return (
    <div className="container">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        redirectUrl="/dashboard"
      />
    </div>
  );
}
