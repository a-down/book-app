import { Pressable, Platform } from 'react-native'
import { styled } from 'nativewind'

export const Button = ({ children }) => {
  const style =
    'rounded-md bg-rose-600/60 py-3 px-4 text-sm hover:bg-rose-600/70 active:scale-[99%]'

  if (Platform.OS === 'web')
    return <button className={style}>{children}</button>
  return styled(Pressable, style)
}
