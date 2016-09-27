
import React from 'react';
import { shallow} from 'enzyme';
import store from "../../app/store";


import Card from '../../app/components/Card';


describe('<Card />', () => {

    const OriginalBox = Card.DecoratedComponent;
    const identity = el => el;

    it('can be tested independently', () => {

        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.hasClass('card')).toBe(true);
    });

    it('should render className "btn btn-danger deleteCard"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.find('a').hasClass('btn btn-danger deleteCard')).toBe(true);
    });

    it('should contain text=delete', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.find('a').text()).toEqual("delete");
    });

    it('should render className "cardTitle"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.find('div.cardTitle').length).toEqual(1);
    });

    it('should render title in div.cardTitle', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setProps({title: "test"});
        expect(wrapper.find('div.cardTitle').text()).toEqual("test");
    });

    it('should render className "glyphicon glyphicon-pencil btn-lg"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.find('span').hasClass('glyphicon glyphicon-pencil btn-lg')).toBe(true);
    });

    it('should render className "glyphicon glyphicon-ok btn-lg"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setState({showEditDescription: true});
        expect(wrapper.find('span').at(0).hasClass('glyphicon glyphicon-ok btn-lg')).toBe(true);
    });

    it('should render className "form-control"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setState({showEditDescription: true});
        expect(wrapper.find('textarea').hasClass('form-control')).toBe(true);
    });

    it('should not render className "form-control" when showEditDescription is not defined ', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setState({showEditDescription: false});
        expect(wrapper.find('textarea').length).toEqual(0);
    });

    it('should render className "card +{current status}"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setProps({status: "todo"});
        expect(wrapper.hasClass('card todo')).toBe(true);
    });

    it('should render className "cardDetails"', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        expect(wrapper.find('div.cardDetails').length).toEqual(1);
    });

    it('should render description in div.cardDetails', () => {
        const wrapper = shallow(<OriginalBox connectDragSource={identity} store={store} cards={[]}/>);
        wrapper.setProps({description: "test"});
        expect(wrapper.find('div.cardDetails').text()).toEqual("test");
    });

    it('should delete card on click', () => {
        let onClick = sinon.spy();
        let wrapper = shallow(<OriginalBox connectDragSource={identity} deleteCard={onClick} store={store} cards={[]}/>);
        wrapper.find(".deleteCard").at(0).simulate("click");
        expect(onClick.called).toBe(true);
    });



});

