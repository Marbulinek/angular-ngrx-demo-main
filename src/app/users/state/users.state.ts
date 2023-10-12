import { User } from "src/app/models/users.model";

export interface UsersState
{
    users: User[];
}

export const initialState: UsersState = {
    users: [],
}