import { Button, Flex, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos, postTodos } from '../Redux/action'

const TodoInput = ({ setChange }) => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(postTodos(title)).then(() => dispatch(getTodos()))
    setTitle("")
  }
  const inputRef = useRef(null)
  setChange(title)
  
  {/* <input ref={inputRef.current} type='text' value={title} onChange={(e) => setTitle(e.target.value)} /> */}
      {/* <button onClick={() => handleClick()} >ADD TODO</button> */}
  return (
  <VStack
        boxShadow={'lg'}
        // maxW={'640px'}
        width={{ base: '300px', md: '600px' }}
        direction={{ base: 'column', md: 'row' }}
        margin={'auto'}
        // width={'full'}
        // overflow={'hidden'}
        rounded={'xl'}
        p={10}
        m={2}
        justifyContent={'space-between'}
        position={'relative'}
        _hover={{ bg: 'transparent', transform: 'scale(1.05)' }}
        
        >
<Input ref={inputRef.current} type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        
        <Button
          bg={'blue.400'}
          // rounded={'full'}
          color={'white'}
          p={3}
          spacing={2}
          width={'200px'}
          _hover={{ bg: 'blue.500' }}
          onClick={() => handleClick()}
        >
      Add
        </Button>
        </VStack>
  )
}
export default TodoInput