import { UserProfile } from "@clerk/remix";

export default function UserProfilePage(): JSX.Element {
  return <UserProfile path="/user" routing="path" />;
}
