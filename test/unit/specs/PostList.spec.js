import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import PostListComponent from '../../../src/components/PostList';

xdescribe('PostList', () => {
  const props = {
    userId: 1,
  };

  xdescribe('The template', () => {
    const wrapper = mount(PostListComponent, { propsData: props });

    xit('renders a containing div', () => {
      expect(wrapper.contains('div')).to.be(true);
    });

    xit('renders a list of post entries', () => {
    });

    xit('renders posts by the current user if a current user id is passed in', () => {
    });
  });

  xdescribe('Computed', () => {
    xit('gets a list of posts by the current user given an id', () => {
    });
  });

  xdescribe('Props', () => {
    xit('receives a userId prop', () => {
    });

    xit('the userId is a Number', () => {
    });
  });
});
