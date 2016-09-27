import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Provider} from "react-redux";
import store from "../../app/store"

import List from '../../app/components/List';


describe('<List/>', () => {
    const OriginalBox = List.DecoratedComponent;
    const identity = el => el;


    it('should render className "list"', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        expect(wrapper.find('.list').length).toEqual(1);
    });

    it('should render className "btn btn-primary toggleAddCard"', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        expect(wrapper.find("a").hasClass('btn btn-primary toggleAddCard')).toBe(true);
    });

    it('should be true when clicked', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.find("a").simulate("click");
        expect(wrapper.state().showAddCard).toBe(true);
    });

    it('should contain text=newCard', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        expect(wrapper.find("a").text()).toEqual("newCard")
    });

    it('should contain props.title', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.setProps({title: "test"});
        expect(wrapper.find("h1").text()).toEqual("test")
    });

    it('should render className=addTask', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.setState({showAddCard: true});
        expect(wrapper.find("div.addTask").hasClass("addTask")).toBe(true);
    });

    it('should render className=form-control title type=text placeholder=Title', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.setState({showAddCard: true});
        expect(wrapper.find("input").hasClass("form-control title")).toBe(true);
        expect(wrapper.find("input").props().type).toEqual("text");
        expect(wrapper.find("input").props().placeholder).toEqual("Title");

    });

    it('should render className=form-control type=text placeholder=Description', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.setState({showAddCard: true});
        expect(wrapper.find("textarea").hasClass("form-control")).toBe(true);
        expect(wrapper.find("textarea").props().type).toEqual("text");
        expect(wrapper.find("textarea").props().placeholder).toEqual("Description");

    });

    it('should render className=btn btn-success addCardButton and should contain text=Add', () => {
        let wrapper = shallow(<OriginalBox connectDropTarget={identity} store={store} cards={[]}/>);
        wrapper.setState({showAddCard: true});
        expect(wrapper.find("button").hasClass("btn btn-success addCardButton")).toBe(true);
        expect(wrapper.find("button").text()).toEqual("Add");
    });

});