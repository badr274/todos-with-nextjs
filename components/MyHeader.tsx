import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

const MyHeader = () => {
  return (
    <header className="flex w-full items-center justify-between mt-2 mb-5 px-4">
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
export default MyHeader;
