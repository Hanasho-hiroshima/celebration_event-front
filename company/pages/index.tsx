import { useState } from 'react'
import { formatNumber } from '@packs/utils'
import {
  InputRadioGroup,
  InputRadioGroupValue,
} from '@packs/components-next/components/input/InputRadioGroup/InputRadioGroup'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Home: NextPage = () => {
  const [value, setValue] = useState<InputRadioGroupValue>(true)

  const items = [
    {
      value: true,
      label: 'はい',
    },
    {
      value: false,
      label: 'いいえ',
    },
  ]
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            {formatNumber(10000000, '￥')}
          </Typography>
        </Box>
      </Container>
      <InputRadioGroup
        value={value}
        items={items}
        onHandleChange={(propValue) => {
          setValue(propValue)
        }}
      />
    </>
  )
}

export default Home
