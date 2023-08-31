import { Endpoints } from '@octokit/types';

export type Issue = Endpoints['GET /issues']['response']['data'][0];
