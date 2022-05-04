/* eslint no-use-before-define: 0 */ // --> OFF
import { mount } from '@vue/test-utils'
import HomeDayInfo from './HomeDayInfo.vue'

describe('Home - Header - unit', () => {
  const mountHomeDayInfo = () => {
    const wrapper = mount(HomeDayInfo)

    return wrapper
  }

  it('should mount component', () => {
    const wrapper = mountHomeDayInfo()
    expect(wrapper.vm).toBeTruthy()
  })
})
