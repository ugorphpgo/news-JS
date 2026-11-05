import './sources.css';
import { SourceItem } from '../../models';

class Sources {
    public draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (!sourceItemTemp){
            throw new Error('Template Sources not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceItem = sourceClone.querySelector('.source__item');
            const sourceItemName = sourceClone.querySelector('.source__item-name');

            if (sourceItemName){
                sourceItemName.textContent=item.name;
            }

            if (sourceItem) {
                sourceItem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });
        const sources = document.querySelector('.sources');
        if(sources){
            sources.append(fragment);
        }
    }
}

export default Sources;
