'use client'

import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
    Spacer,
  } from '@chakra-ui/react'
import SearchBar from './searchbar'
import TimeMenu from './timemenu'
import DateMenu from './datemenu'


export default function FilterBar() {
  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center" width="100%" paddingY="40px" gap={4}>
        <SearchBar />
        <Spacer />
        <TimeMenu />
        <Spacer />
        <DateMenu />
    </Box>
  )
}
