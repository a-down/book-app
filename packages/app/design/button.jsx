import { Pressable, Platform } from 'react-native'
import { styled } from 'nativewind'

export const Button = ({ children }) => {
  const style =
    'rounded-md bg-pink-300 p-2 text-sm hover:bg-pink-400/80 active:scale-[99%]'

  if (Platform.OS === 'web')
    return <button className={style}>{children}</button>
  return styled(Pressable, style)
}
