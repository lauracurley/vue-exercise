import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import PostEntryComponent from '../../../src/components/PostEntry';

xdescribe('PostEntry', () => {
  const props = {
    post: {
      id: 1,
      userId: 1,
      title: 'Title',
      body: 'Some body text',
    },
  };

  xdescribe('The template', () => {
    const wrapper = mount(PostEntryComponent, { propsData: props });

    xit('renders a containing div', () => {
      expect(wrapper.contains('div')).to.be(true);
    });

    xit('renders the blog title', () => {
    });

    xit('renders the blog body text', () => {
    });

    xit('renders the username of the blog author', () => {
    });
  });

  xdescribe('Computed', () => {
    xit('finds the user for a the current user id', () => {
    });
  });

  xdescribe('Props', () => {
    xit('receives a post prop', () => {
    });

    xit('the post prop is an object', () => {
    });
  });
});
