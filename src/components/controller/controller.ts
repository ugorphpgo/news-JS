import AppLoader from './appLoader';
import { Endpoint } from './loader';
import SourcesResponse from '../models/sourcesResponse';
import NewsResponse from '../models/newsResponse';

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: NewsResponse) => void): void {
        const clicked = e.target;
        const newsContainer = e.currentTarget;

        if (!(clicked instanceof Element) || !(newsContainer instanceof Element)) {
            return;
        }

        const sourceItem = clicked.closest('.source__item');
        if (!sourceItem) {
            return;
        }

        const sourceId = sourceItem.getAttribute('data-source-id');
        if (!sourceId || newsContainer.getAttribute('data-source') === sourceId) {
            return;
        }

        newsContainer.setAttribute('data-source', sourceId);
        super.getResp({ endpoint: Endpoint.News, options: { sources: sourceId } }, callback);
    }
}

export default AppController;
