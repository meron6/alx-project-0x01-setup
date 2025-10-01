export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  company: {
    catchPhrase: string;
  };
}
