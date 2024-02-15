import { View } from 'app/design/view'
import { styled } from 'nativewind'
import { Platform } from 'react-native'

export const Form = ({ children, tw }) => {
  const style = 'flex flex-col'
  if (Platform.OS === 'web')
    return <form className={`${tw} + ${style}`}>{children}</form>
  return styled(View, style)
}
