import Header from "@/components/common/Header";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: { users },
  };
}

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div>
      <Header />
      <h1>Users</h1>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
