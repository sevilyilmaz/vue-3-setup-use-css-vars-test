import { mount } from '@vue/test-utils';
import WithComputedProp from './WithComputedProp.vue';

describe('WithComputedProp', () => {
  it('renders correctly', () => {
    const wrapper = mount(WithComputedProp);

    expect(wrapper.html()).toBe('<div class="root" style="--p: 4;"></div>');
  });
});
