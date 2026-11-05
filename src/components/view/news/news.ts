import './news.css';
import { NewsItem } from '../../models';

class News {
    public draw(data:NewsItem[]):void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (!newsItemTemp) {
            throw new Error('News item templates not found ');
        }
        const newsContainer = document.querySelector('.news');
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItem = newsClone.querySelector('.news__item');
            const newsMetaPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
            const newsDescriptionSource = newsClone.querySelector('.news__description-source');
            const newsDescriptionContent = newsClone.querySelector('.news__description-content');
            const newsReadMore = newsClone.querySelector('.news__read-more a');

            if (newsItem && idx % 2) newsItem.classList.add('alt');

            if(newsMetaPhoto) newsMetaPhoto.style.backgroundImage = `url(${
                item.urlToImage ?? 'img/news_placeholder.jpg'
            })`;

            if (newsMetaAuthor) newsMetaAuthor.textContent = item.author ?? item.source.name;

            if(newsMetaDate) newsMetaDate.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;

            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;

            if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;

            if(newsReadMore) newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        if(newsContainer) newsContainer.replaceChildren(fragment)
    }
}

export default News;
