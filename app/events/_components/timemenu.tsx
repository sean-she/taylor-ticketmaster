import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Box,
    Button,
  } from '@chakra-ui/react'

export default function TimeMenu() {
return (
    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={60}>
            Time
        </MenuButton>
        <MenuList>
            <MenuItem>Sunday</MenuItem>
            <MenuItem>Monday</MenuItem>
            <MenuItem>Tuesday</MenuItem>
            <MenuItem>Wednesday</MenuItem>
            <MenuItem>Friday</MenuItem>
            <MenuItem>Saturday</MenuItem>
        </MenuList>
    </Menu>
)
}