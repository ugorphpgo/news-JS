import SourceItem from './sourceItem';


interface NewsItem {
    source: Pick<SourceItem, 'id' | 'name'>;
    author: string | null;
    content: string | null;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string | null;
}

export default NewsItem;