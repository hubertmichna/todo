import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Calendar from '../src/js/Calendar';
import Header from '../src/js/Header';
import KanbanBoardConnector from '../src/js/KanbanBoardConnector';
import store from "../src/store"



describe('<Calendar />', () => {

    it('should render one <Header /> component', () => {
        const wrapper = shallow(<Calendar store={store}/>);
        expect(wrapper.find(Header).length).toEqual(1);
    });

    it('should render one <KanbanBoardConnector /> component', () => {
        const wrapper = shallow(<Calendar store={store}/>);
        expect(wrapper.find(KanbanBoardConnector).length).toEqual(1);
    });

    it('should render className .calendar', () => {
        const wrapper = shallow(<Calendar store={store}/>);
        expect(wrapper.hasClass('calendar')).toBe(true);
    });


});