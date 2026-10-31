import NewsItem from './newsItem';

interface NewsResponse {
    status: 'ok';
    totalResults: number;
    articles: NewsItem[];
}

export default NewsResponse;