import { View } from 'app/design/view'
import { styled } from 'nativewind'
import { Platform } from 'react-native'

export const Form = ({ children, style }) => {
  if (Platform.OS === 'web')
    return <form className={`${style} flex flex-col`}>{children}</form>
  return styled(View)
}
