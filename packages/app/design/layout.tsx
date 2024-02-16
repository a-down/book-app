import { ScrollView as NativeScrollView, View, Platform } from 'react-native'
import { styled } from 'nativewind'

export const Row = styled(View, 'flex flex-row items-center')
export const Column = styled(View, 'flex flex-col')

export const ScrollView =
  Platform.OS === 'web'
    ? styled(View, 'flex-1')
    : styled(NativeScrollView, 'flex-1')
