import { extendTheme } from '@chakra-ui/react'

interface themeProps {
  colorMode: string
}

const config= {
  initialColorMode:'light',
  useSystemColorMode: true,
  styles:{
    global:{
      body:{
        fontFamiy:'Noto Sans JP',
      },
    },
  },
}

export const theme = extendTheme(config)
