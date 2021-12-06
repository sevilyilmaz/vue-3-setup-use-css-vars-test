import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders with correct classes', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.classes()).toEqual(['foo']);
  });
});
