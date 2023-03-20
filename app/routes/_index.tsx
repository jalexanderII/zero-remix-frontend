import { Link } from "@remix-run/react";
import { SignedOut } from "@clerk/remix";
import Footer from "~/components/footer";
import { useEffect } from "react";

// Main component using <SignedIn> and <SignedOut>
//
// The SignedIn and SignedOut components are used to control rendering depending
// on whether a visitor is signed in.
//
// https://docs.clerk.dev/frontend/react/signedin-and-signedout
const Main = (): JSX.Element => {
  useEffect(() => {
    if (document.getElementById("launchlist")) {
      return;
    }
    const script = document.createElement("script");
    script.id = "launchlist";
    script.src = "https://getlaunchlist.com/js/widget.js";
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="pt-4 text-center">
            <div className="mt-10 mb-6 flex items-center justify-center gap-x-6">
              <SignedOut>
                <Link
                  to="/sign-up"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up today
                </Link>
              </SignedOut>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tired of managing all of your credit payments on your own?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Zero is the easiest way to manage your debt. Zero will help you
              achieve your credit reduction goals, save on fees, and improve
              your credit score!
            </p>
            <p className="mt-6 text-sm text-gray-600">
              <em>
                With premium we'll automatically handle the deduction and
                payments needed for your payment plans
              </em>
            </p>
            <div
              className="launchlist-widget"
              data-key-id="KDgsgp"
              data-height="75px"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default function _index(): JSX.Element {
  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
}
