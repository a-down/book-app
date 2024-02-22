import { A, H1, H2, H3, H4, P, Text, TextLink } from 'app/design/typography'
import { Row, Column } from 'app/design/layout'
import { ScrollView, Platform, Image } from 'react-native'
import { View, View as Card } from 'app/design/view'
import { Link } from 'solito/link'
import { Button } from 'app/design/components/Button'
// import {
//   ArrowRight as ArrowRightIcon,
//   Book as FeatherBookIcon,
//   Star as FeatherStarIcon,
// } from 'feather-icons-react'
// import Feather from '@expo/vector-icons/Feather'
// import { FeatherBookIcon } from 'app/design/icons/FeatherBookIcon'
import expoBookIcon from '../../../../apps/expo/assets/book.png'
import nextBookIcon from '../../../../apps/next/public/book.png'
import { SolitoImage } from 'solito/image'

import { MotiLink } from 'solito/moti'

const CurrentlyReadingCard = () => {
  return (
    <Card className="relative overflow-hidden rounded-lg border border-rose-500 bg-rose-300/40 p-6">
      <View className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700"></View>

      <Row className="mt-1 items-start justify-between">
        <P className="text-xs font-medium text-rose-950">
          Currently reading...
        </P>
        <TextLink
          className="text-right text-xs font-medium text-rose-800"
          href="#"
        >
          More by the Author
        </TextLink>
      </Row>

      <Row className="mt-2 gap-4">
        <View className="h-24 w-16 rounded-sm bg-rose-900">
          {/* <img
            alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-24 w-16 rounded-sm object-cover shadow-sm"
          /> */}
        </View>
        <Column className="h-full w-full justify-end">
          <H3 className="text-wrap text-lg font-bold text-gray-900">
            Building a SaaS product as a software developer
          </H3>

          <P className="text-xs font-medium text-rose-900">John Doe</P>
        </Column>
      </Row>

      <Row className="mt-4 h-4 w-full overflow-clip rounded-lg bg-rose-200">
        <Row className=" h-4 w-[75%] rounded-r-lg bg-rose-800"></Row>
      </Row>

      <TextLink
        className="p-1 text-center text-xs font-medium text-rose-900/80"
        href="#"
      >
        Track Your Progress
      </TextLink>
    </Card>
  )
}

const ViewBookshelfLink = () => {
  return (
    <Link href="#">
      <Row className="justify-center gap-2 hover:opacity-60 active:scale-[99%]">
        <BookIcon />
        <H4 className="font-semibold">View your Bookshelf</H4>
        <ArrowRightIcon />
      </Row>
    </Link>
  )
}

const BookIcon = () => {
  return Platform.OS === 'web' ? (
    <SolitoImage src={nextBookIcon} />
  ) : (
    <Image source={expoBookIcon} style={{ height: 64, width: 64 }} />
  )
}

// const StarIcon = () => {
//   return Platform.OS === 'web' ? (
//     <FeatherStarIcon className="absolute bottom-0 right-10 h-16 w-16 text-rose-600"></FeatherStarIcon>
//   ) : (
//     <View className="absolute bottom-0 right-10">
//       <Feather name="star" size={64} color="#e11d48"></Feather>
//     </View>
//   )
// }

// export function HomeScreen() {
//   return (
//     <View className="flex-1 items-center bg-rose-400 p-4">
//       <View className="max-w-[500px] flex-1 items-stretch justify-start gap-8">
//         <Row className="items-end justify-between">
//           <View className="mt-8">
//             <H2>Welcome back...</H2>
//             <H1>Brittany!</H1>
//           </View>
//           <BookIcon className="absolute bottom-4 right-0 h-16 w-16 text-rose-800"></BookIcon>
//           <StarIcon className="absolute bottom-0 right-10 h-16 w-16 text-rose-600"></StarIcon>
//         </Row>

//         <CurrentlyReadingCard />
//         <ViewBookshelfLink />
//       </View>
//     </View>
//   )
// }

export function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View className="flex-1 items-center bg-rose-400 p-4">
        <View className="flex w-full max-w-[500px] flex-1 justify-start gap-8">
          <Row className="items-end justify-between">
            <View className="mt-8">
              <H2>Welcome back...</H2>
              <H1>Brittany!</H1>
            </View>

            <BookIcon />
            {/* <FeatherBookIcon /> */}
            {/* <StarIcon /> */}

            {/* <View className="absolute bottom-0 right-10 text-rose-600">
              <Feather name="star" size={64}></Feather>
            </View> */}
          </Row>

          {/* <CurrentlyReadingCard />
          <ViewBookshelfLink /> */}
        </View>
      </View>
    </ScrollView>
  )
}
