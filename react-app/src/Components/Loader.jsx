import {Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        position='absolute'
        // width="400px"
      />
    )
}

export default Loader
