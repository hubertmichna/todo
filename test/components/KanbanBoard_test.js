import React from 'react';
import {shallow} from 'enzyme';
import store from '../../app/store';

import KanbanBoard from "../../app/components/KanbanBoard";
import ListConnector from "../../app/components/Connectors/ListConnector";


describe('<KanbanBoard/>', () => {
    const OriginalBox = KanbanBoard.DecoratedComponent;
    const identity = el => el;


    it("should render day className", () => {
        let wrapper = shallow(<OriginalBox dragDropManager={identity} store={store} cards={[]}/>);
        expect(wrapper.hasClass("day")).toBe(true);
    });

    it("should render three <ListConnector/> components", () => {
        let wrapper = shallow(<OriginalBox dragDropManager={identity} store={store} cards={[]}/>);
        expect(wrapper.find(ListConnector).length).toBe(3);
    });

    it("first <ListConnector/> node should contain id and title", () => {
        let wrapper = shallow(<OriginalBox dragDropManager={identity} store={store} cards={[]}/>);
        expect(wrapper.find(ListConnector).at(0).props().id).toEqual("todo");
        expect(wrapper.find(ListConnector).at(0).props().title).toEqual("To Do");
    });

    it("secound <ListConnector/> node should contain id and title", () => {
        let wrapper = shallow(<OriginalBox dragDropManager={identity} store={store} cards={[]}/>);
        expect(wrapper.find(ListConnector).at(1).props().id).toEqual("in-progress");
        expect(wrapper.find(ListConnector).at(1).props().title).toEqual("In Progress");

    });

    it("third <ListConnector/> node should contain id and title", () => {
        let wrapper = shallow(<OriginalBox dragDropManager={identity} store={store} cards={[]}/>);
        expect(wrapper.find(ListConnector).at(2).props().id).toEqual("done");
        expect(wrapper.find(ListConnector).at(2).props().title).toEqual("Done");

    });


});
