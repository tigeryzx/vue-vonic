import  ResourceStore  from './resources'

export default {
    getAllValues() {
        return ResourceStore.get('/Values');
    }
}