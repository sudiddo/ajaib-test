export interface UsersResult {
  results: User[];
  info: Info;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface User {
  gender: Gender;
  name: Name;
  email: string;
  registered: Registered;
  id: Id;
  login: Login;
}

export type Gender = "all" | "male" | "female";

interface Id {
  name: string;
  value: string;
}

interface Registered {
  date: string;
  age: number;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
