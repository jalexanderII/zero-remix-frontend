import { SignIn } from "@clerk/remix";

export default function SignInPage(): JSX.Element {
  return (
    <div className="container">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        redirectUrl="/dashboard"
      />
    </div>
  );
}
