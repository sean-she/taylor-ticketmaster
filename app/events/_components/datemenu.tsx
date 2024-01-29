import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
  } from '@chakra-ui/react'

export default function DateMenu() {
return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="xl">
            Date
        </MenuButton>
        <MenuList>
            <MenuItem>tbh</MenuItem>
            <MenuItem>idk</MenuItem>
            <MenuItem>how</MenuItem>
            <MenuItem>to</MenuItem>
            <MenuItem>do</MenuItem>
            <MenuItem>this</MenuItem>
        </MenuList>
    </Menu>
)
}