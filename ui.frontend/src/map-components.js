import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'
import ErrorHeader from './components/ErrorHeader/ErrorHeader'
import Text2 from './components/Text2/Text2'
import CustomButton from './components/CustomButton/CustomButton'
import ErrorFooter from './components/ErrorFooter/ErrorFooter'
import TextInput2 from './components/TextInput2/TextInput2'
import Button from './components/Button/Button'

import FormLogin from './components/Login/FormLogin/FormLogin'
import LoginTexts from './components/Login/LoginTexts/LoginTexts'
import LoginLogo from './components/Login/LoginLogo/LoginLogo'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/form-login')(FormLogin)

MapTo('vue/components/button')(Button)

MapTo('vue/components/text-input2')(TextInput2)

MapTo('vue/components/error-footer')(ErrorFooter)

MapTo('vue/components/custom-button')(CustomButton)

MapTo('vue/components/text2')(Text2)

MapTo('vue/components/error-header')(ErrorHeader)

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

// Login

MapTo('vue/components/login-texts')(LoginTexts, EditConfig)
MapTo('vue/components/login-logo')(LoginLogo, EditConfig)
