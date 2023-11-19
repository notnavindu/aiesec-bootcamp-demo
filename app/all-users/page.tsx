import UserCard from "@/components/user-card";
import { getAllUsers } from "@/lib/db-ops";

export default async function Page() {
  const users = await getAllUsers();

  return (
    <div className="flex flex-col gap-2">
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user._id.toString()}>
            <UserCard user={user} />
          </div>
        ))
      ) : (
        <div className="text-xl mt-4">No users found</div>
      )}
    </div>
  );
}
