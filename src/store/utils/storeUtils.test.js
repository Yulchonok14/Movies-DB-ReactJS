import {getQueryString, sortFunc} from './storeUtils';
import { movieItems } from '../../__mocks__/movieItems';

describe('storeUtils', () => {

    it('getQueryString', () => {
        const actualRes = getQueryString({
            search: 'searchText',
            searchBy: 'searchBy'});
        const expectedRes = 'search=searchText&searchBy=searchBy';
        expect(actualRes).toEqual(expectedRes);
    });

    describe('sortFunc', () => {
        it('by number field', () => {
            const movies = [movieItems[0], movieItems[1]];
            const actualRes = movies.sort((a, b) => sortFunc(a, b, 'runtime'));
            const expectedRes = [movieItems[1], movieItems[0]];
            expect(actualRes).toEqual(expectedRes);
        });

        it('by not a number field when the first four characters are number', () => {
            const movies = [movieItems[0], movieItems[1]];
            const actualRes = movies.sort((a, b) => sortFunc(a, b, 'release_date'));
            const expectedRes = [movieItems[0], movieItems[1]];
            expect(actualRes).toEqual(expectedRes);
        });

    });
});


