import { mount } from '@vue/test-utils';
import WithUseCssVars from './WithUseCssVars.vue';

describe('WithUseCssVars', () => {
  it('renders correctly', () => {
    const wrapper = mount(WithUseCssVars);

    expect(wrapper.html()).toBe('<div class="root" style="--p: 4;"></div>');
  });
});
