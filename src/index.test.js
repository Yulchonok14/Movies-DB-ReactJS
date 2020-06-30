import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';

//import { rootReducer } from './index';
import movieHunterReducer from './store/reducers/movieHunterReducer';
import movieDetailsReducer from './store/reducers/movieDetailsReducer';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
    it('snapshot renders', () => {
        const store = createStore(() => {});
        const component = renderer.create(<Provider store={store}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    //it('rootReducer initial state matches result of child reducers with empty action', () => {
    //    let store = createStore(rootReducer);
    //    expect(store.getState().hunter).toEqual(movieHunterReducer(undefined, {}));
    //    expect(store.getState().details).toEqual(movieDetailsReducer(undefined, {}));
    //});
});