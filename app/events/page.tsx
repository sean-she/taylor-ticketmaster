'use client'

import { Box, Button, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from '@chakra-ui/react'
import { Shows } from './data';
import ShowItem from './_components/showitem'
import Socials from '../_components/socials';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export default function EventsPage() {

    const times = Shows.map((show) => <MenuItem key={show.name} onClick={() => setTimeFilter(show.time)}>{show.time}</MenuItem>);

    const [searchFilter, setSearchFilter] = useState("");
    const [dateFilter, setDateFilter] = useState("");
    const [timeFilter, setTimeFilter] = useState("");

    const filteredEvents = Shows.filter((show) => show.name.toLowerCase().includes(searchFilter.toLowerCase()) && show.date.toLowerCase().includes(dateFilter.toLowerCase()) && show.time.toLowerCase().includes(timeFilter.toLowerCase()));

    function resetFilters(): void {
        setSearchFilter("");
        setDateFilter("");
        setTimeFilter("");
    };

    const shows = filteredEvents.map((show) => <ShowItem key={show.name} name={show.name} date={show.date} time={show.time} />);

    return (
        <Box minHeight="90vh">
            <Box py="30px" px="40px">
                <Text fontSize="100px" fontWeight="bold">
                    Events
                </Text>

                <Box display="flex" justifyContent="flex-start" alignItems="center" width="100%" paddingY="40px" gap={4}>
                    <Input placeholder="Search ..." width="2xl" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)}></Input>
                    <Spacer />
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width={60}>
                            Time
                        </MenuButton>
                        <MenuList>
                            {times}
                        </MenuList>
                    </Menu>
                    <Spacer />
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="xl">
                            Date
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => setDateFilter("Sunday")}>Sunday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Monday")}>Monday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Tuesday")}>Tuesday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Wednesday")}>Wednesday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Thursday")}>Thursday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Friday")}>Friday</MenuItem>
                            <MenuItem onClick={() => setDateFilter("Saturday")}>Saturday</MenuItem>
                        </MenuList>
                    </Menu>
                    <Spacer />
                    <Button colorScheme='red' variant='outline' onClick={() => resetFilters()}>Reset Filters</Button>
                </Box>

                <Box display="flex" flexDirection="column" gap={10}>
                    {shows}
                </Box>

                <Socials />
            </Box>
        </Box>
    )
}

// 1. https://medium.com/@utkarsh.gupta0311/reacts-filter-component-a-comprehensive-guide-b457a9b6dd2b#:~:text=At%20its%20core%2C%20a%20filter,search%20queries%2C%20or%20custom%20logic.
// 2. https://javascript.plainenglish.io/how-to-clear-an-input-field-with-react-f0cc878f597f


// For compound filtering in one category:
// https://www.youtube.com/watch?v=u1yr_HZivzk&ab_channel=xplodivity
// But Chakra UI menus are a little strange