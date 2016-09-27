import React from 'react';
import { shallow, mount, render } from 'enzyme';


import AppWrap from '../src/js/AppWrap';
import CalendarConnector from "../src/js/CalendarConnector"



describe('<AppWrap />', () => {

    it('should render one <CalendarConnector /> component', () => {
        const wrapper = shallow(<AppWrap />);
        expect(wrapper.find(CalendarConnector).length).toBe(1);
    });



});