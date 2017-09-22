export interface User {
    id: number;
    username: string;
    name: string;
}

export interface UserDetails extends User {
    member_teams: Array<number>;
    lead_teams: Array<number>;
}
