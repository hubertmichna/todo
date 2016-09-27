import React from 'react';
import { shallow, mount, render } from 'enzyme';


import AppWrap from '../../app/components/AppWrap';
import CalendarConnector from "../../app/components/Connectors/CalendarConnector"



describe('<AppWrap />', () => {

    it('should render one <CalendarConnector /> component', () => {
        const wrapper = shallow(<AppWrap />);
        expect(wrapper.find(CalendarConnector).length).toBe(1);
    });



});