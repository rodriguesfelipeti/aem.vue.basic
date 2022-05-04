/* eslint no-use-before-define: 0 */ // --> OFF
import { mount } from '@vue/test-utils'
import LoginLogo from './LoginTexts.vue'

describe('Login Logo - unit', () => {
  const mountLoginLogo = () => {
    const wrapper = mount(LoginLogo)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountLoginLogo()
    expect(wrapper.vm).toBeTruthy()
  })
})
