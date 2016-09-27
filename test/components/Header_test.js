import React from 'react';
import { shallow, mount, render } from 'enzyme';

import store from "../../app/store"
import Header from "../../app/components/Header";



describe('<Header/>', () => {

    it('should render children with .header class', () => {
        let wrapper;
        wrapper = shallow(<Header week={["monday"]} store={store} cards={[]}/>);
        expect(wrapper.children(".header").length).toEqual(1);
        wrapper = shallow(<Header week={["monday", "tuesday"]} store={store}/>);
        expect(wrapper.children(".header").length).toEqual(2);
    });

    it('should render children with ".header selected " class', () => {
        let wrapper = shallow(<Header week={["monday","tuesday", "wednesday"]} selectedDayIndex={2} store={store}/>);
        expect(wrapper.children(".header").length).toEqual(3);
        expect(wrapper.children(".header selected").length).toEqual(1);
    });

    it('should render children with ".header selected " class', () => {
        let wrapper = shallow(<Header week={["monday","tuesday", "wednesday"]} selectedDayIndex={2} store={store}/>);
        expect(wrapper.find('span').at(2).hasClass('header'));
    });

    it('should call onClick when clicked', () => {
        let onClick = sinon.spy();
        let wrapper = shallow(<Header week={["monday","tuesday", "wednesday","thursday","friday","saturday","sunday"]} selectedDayIndex={2} setSelectedDay={onClick} store={store}/>);
        wrapper.find('span').at(2).simulate("click");
        expect(onClick.called).toBe(true);
        expect(wrapper.find("span").at(2).hasClass("header selected")).toBe(true);
    });

    it('should call onClick when clicked', () => {
        let onClick = sinon.spy();
        let wrapper = shallow(<Header week={["monday","tuesday", "wednesday","thursday","friday","saturday","sunday"]} selectedDayIndex={5} setSelectedDay={onClick} store={store}/>);
        wrapper.find('span').at(4).simulate("click");
        expect(onClick.called).toBe(true);
        expect(wrapper.find("span").at(5).hasClass("header selected")).toBe(true);
    });

});
