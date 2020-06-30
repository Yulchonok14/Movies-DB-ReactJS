import { createStore } from 'redux';

import { rootReducer } from './store';
import movieHunterReducer from './store/reducers/movieHunterReducer';
import movieDetailsReducer from './store/reducers/movieDetailsReducer';

describe("Store", () => {

    it('rootReducer initial state matches result of child reducers with empty action', () => {
        let store = createStore(rootReducer);
        expect(store.getState().hunter).toEqual(movieHunterReducer(undefined, {}));
        expect(store.getState().details).toEqual(movieDetailsReducer(undefined, {}));
    });
});