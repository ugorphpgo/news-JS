import SourceItem from './sourceItem';

interface SourcesResponse{
    status: 'ok';
    sources: SourceItem[];
}

export default SourcesResponse;