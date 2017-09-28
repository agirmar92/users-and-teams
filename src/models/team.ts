import { UserDetails } from './user';

export interface Team {
    id: number;
    name: string;
}

export interface TeamDetails extends Team {
    lead: number;
    members: Array<number>;
}
