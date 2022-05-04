/* eslint no-use-before-define: 0 */ // --> OFF
import { mount } from '@vue/test-utils'
import HomeDescription from './HomeDescription.vue'

describe('Home - Header - unit', () => {
  const mountHomeDescription = () => {
    const wrapper = mount(HomeDescription)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHomeDescription()
    expect(wrapper.vm).toBeTruthy()
  })
})
