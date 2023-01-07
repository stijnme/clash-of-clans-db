export interface ClanModel {
  tag: string;
  name?: string;
  type?: string;
  description?: string;
  memberList?: ClanMember[];
  apiRetrieved: boolean;
}

interface ClanMember {
  tag: string;
  name: string;
}
