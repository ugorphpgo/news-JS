import News from './news/news';
import Sources from './sources/sources';
import NewsResponse  from '../models/newsResponse';
import SourcesResponse  from '../models/sourcesResponse';


export class AppView {
    private news: News;
    private sources: Sources;
    public constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse):void {
        this.news.draw(data.articles);
    }

    public drawSources(data: SourcesResponse):void {
        this.sources.draw(data.sources);
    }
}

export default AppView;
