import { IArticles } from './iArticles';
import { ICore } from './iCore';

export interface INews extends ICore {
  articles: Array<IArticles>;
}
