/* eslint no-use-before-define: 0 */ // --> OFF
import { mount } from '@vue/test-utils'
import HomeLogo from './HomeLogo.vue'

describe('Home - Header - unit', () => {
  const mountHomeLogo = () => {
    const wrapper = mount(HomeLogo)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHomeLogo()
    expect(wrapper.vm).toBeTruthy()
  })
})
