import {createFromAlgoliaCredentials} from 'vue-instantsearch';
import algoliasearch from 'algoliasearch';


export const searchStore = createFromAlgoliaCredentials('API', 'key');

export const adminIndex = algoliasearch('API', 'adminKEY').initIndex('books');