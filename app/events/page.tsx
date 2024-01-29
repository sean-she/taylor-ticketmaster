import { Box, Text } from '@chakra-ui/react'
import FilterBar from './_components/filterbar'
import { Shows } from './data';
import ShowItem from './_components/showitem'
import Socials from '../_components/socials';

export default function EventsPage() {

    const shows = Shows.map((show) => <ShowItem key={show.name} name={show.name} date={show.date} time={show.time} />);

    return (
        <Box minHeight="90vh">
            <Box py="30px" px="40px">
                <Text fontSize="100px" fontWeight="bold">
                    Events
                </Text>

                <FilterBar />

                <Box display="flex" flexDirection="column" gap={10}>
                    {shows}
                </Box>

                <Socials />
            </Box>
        </Box>
    )
}

// Couldn't figure out how to do the filtering but here are some links I think would be useful:
// 1. https://medium.com/@utkarsh.gupta0311/reacts-filter-component-a-comprehensive-guide-b457a9b6dd2b#:~:text=At%20its%20core%2C%20a%20filter,search%20queries%2C%20or%20custom%20logic.
// 2. https://www.youtube.com/watch?v=u1yr_HZivzk&ab_channel=xplodivity