import type { NextPage } from 'next'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'
import Layout from 'components/Layout'

import { useBudouX } from 'hooks/useBudouX'

const Home: NextPage = () => {
  const {parse} = useBudouX()
  return (
    <Layout>
      <Accordion allowToggle allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                GAMCalcとは？
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack>
              <Box>
                <Heading size='md'>素材の残り必要数が分かる計算機</Heading>
                <p>{parse('所持素材と目標素材を入力することで、あとどれだけ素材を集めればよいのか分かります。')}</p>
              </Box>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {/* Calclator */}
      

    </Layout>
  )
}

export default Home
