import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Calendar from '../../app/components/Calendar';
import Header from '../../app/components/Header';
import KanbanBoardConnector from '../../app/components/Connectors/KanbanBoardConnector';
import store from "../../app/store"



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