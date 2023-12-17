export interface Root {
  status: string;
  sources: News[];
}

export interface News {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export class NuovoNewsDto {
  constructor(
    public id: number,
    public name: string = '',
    public description: string = '',
    public url: string = '',
    public category: string = '',
    public language: string = '',
    public country: string = ''
  ) {}
}

export class LoginDto {
  constructor(public email: string = '', public password: string = '') {}
}

export type User = {
  id: number;
  name: string;
  email: string;
};

export type LoggedUser = {
  accessToken: string;
  user: User;
};
