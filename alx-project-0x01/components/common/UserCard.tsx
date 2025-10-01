import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email }) => {
  return (
    <div className="border p-4 rounded shadow">
      <p><strong>User ID:</strong> {id}</p>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserCard;
