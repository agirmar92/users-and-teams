import { UserDetails } from './user';

export interface Team {
    id: number;
    name: string;
}

export interface TeamDetails extends Team {
    lead: UserDetails;
    members: Array<UserDetails>;
}
