import { Box, Flex, Text } from '@chakra-ui/react';
import { PrimaryButton } from '@/components';
import { MdFlight } from 'react-icons/md';

export default function TripItem() {
    return (
        <Box
            backgroundColor={'white'}
            padding={{
                base: '15px',
                md: '20px'
            }}
            alignSelf={'center'}
            width={{
                base: '100%',
                md: '70%',
                lg: '60%',
                xl: '40%'
            }}
        >
            <Flex
                gap={3}
                flexDirection={{
                    base: 'column',
                    sm: 'row'
                }}>
                <Box
                    width={'100%'}
                    bgColor={'secondary.50'}
                    padding={'10px'}
                >
                    <Text variant={'body-tiny'}>
                        Sun, 19 Nov 2024
                    </Text>
                    <Flex justifyContent={'space-between'}>
                        <Box>
                            <Text variant={'body-large-bold'}>
                                14.50
                            </Text>
                            <Text variant={'body-tiny'}>
                                Hanoi, Vietnam
                            </Text>
                        </Box>
                        <Box>
                            <Text variant={'body-small-bold'} padding={'0 20px'}>
                                9hr 50mins
                            </Text>
                            <Flex justifyContent={'space-between'} gap={1} alignItems={'center'}>
                                <Box
                                    width={'40%'}
                                    height={'1px'}
                                    bgColor={'gray.300'}
                                />
                                <MdFlight
                                    size={20}
                                    className='rotate-90'
                                    color='gray'
                                />
                                <Box
                                    width={'40%'}
                                    height={'1px'}
                                    bgColor={'gray.300'}
                                />
                            </Flex>
                        </Box>
                        <Box>
                            <Text variant={'body-large-bold'}>
                                14.50
                            </Text>
                            <Text variant={'body-tiny'}>
                                Hanoi, Vietnam
                            </Text>
                        </Box>
                    </Flex>
                </Box>
                <Flex
                    flexDirection={{
                        base: 'row',
                        sm: 'column'
                    }}
                    justifyContent={{
                        base: 'space-between',
                        sm: 'space-evenly'
                    }}
                    alignItems={'center'}
                >
                    <Text variant={'body-extra-large-bold'}>
                        $100
                    </Text>
                    <PrimaryButton>
                        Book Now
                    </PrimaryButton>
                </Flex>
            </Flex>
            <Flex mt={5} justifyContent={'space-between'}>
                <Text variant={'body-small'}>
                    100 seats left
                </Text>
                <Text color='orange' variant={'body-small'}>
                    Partially refundable
                </Text>
                <Text
                    variant={'body-small-bold'}
                    color='primary.600'
                    cursor={'pointer'}
                >
                    View Details
                </Text>
            </Flex>
        </Box>
    )
}