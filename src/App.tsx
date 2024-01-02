import {
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";


function App() {
  return (
    <div className="home">
      <SignedOut>
        <SignInButton />
       <p>please, Sign In </p>
      </SignedOut>
      <SignedIn>
        <SignOutButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}

export default App;
