import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type LinkItem = {
  text: string;
  link: string;
};

const Links: LinkItem[] = [
  { text: 'الرئيسية', link: '/' },
  { text: 'فيديوهات المواهب', link: '/compeition' },
  { text: 'اخبار الفنانين', link: '/News' },
  { text: 'فيديوهات المواهب العالمية', link: '/AllVideos' },
  { text: 'فديوهاتي', link: '/myvideos' },
];

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#ff7900',
    }}
    href={link}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const handleClick = (url: string) => {
    router.push(url);
    onClose(); // Close the mobile menu after navigation
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} bgColor={'#000'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bgColor={'#000'}
            color={'#fff'}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'#fff'}>لو موهوب</Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <span onClick={() => handleClick(link.link)}>
                  <NavLink key={link.text} link={link.link}>
                    {link.text}
                  </NavLink>
                </span>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                bgColor={'#000'}
                _hover={{
                  bg: '#ff7900',
                }}
              >
                <Image
                  size={'sm'}
                  width={'10'}
                  height={'10'}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAe1BMVEX/eQD/////dgD/nWf/cQD/bwD/dAD/bAD/4NH/xqn/klH/+/n/jEv/aQD/7eX/zrj/jUH/6Nz/3Mr/9/L/5db/exP/1MD/uZb/mWL/o3L/gzL/07v/pnn/iD7/fCD/son/gSj/kVr/l1v/rIT/vZ7/XwD/dRP/spL/zbAa+GtvAAAEL0lEQVRoge2X65KiOhCAIeTCLWi4Kgro6O74/k940p2goOhunbLG/ZFUzRQknXzpK63nfWKQ4CNYx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Vcx3Xcf4xL9LBPP8nt0y5Nq+7geVVa/RyXpLVSdadKSZskJj+nL5HRILkKO6HU8Qe5Ho0aSrJgtVnlH+AyVcdL3GvQzSZvqwuLC3NLEoZbNYUs77lciPVXzCW38lJKof9XMb4x6aXpQQrD4VQI3NG24xTKcCqZR4QQ1EwxWaVrOJJsdDidvD6g23YezzIIfRjZCQ8iaZFlJdso39eBL7pVgqv5hgF2H+VlL7a4I+/MTWm7gtdd25alagDMDxfcVDQMLcnBeHf5K2p/HOqg10gMd4jgvfLE+broR/pEWuqHTWhnihbOosEo0YAUm8742WHmjxuX3bBaqrJcMyqG+EQp1HnLPQrIxP75fq1tTjqztbC30+ZO8VJhibpUi1y+R5nVcM7gYUVv3CKr+FbPNi0hLayGwnB9/xJ3XWHvKRWcHvdtM3IFCNcHynHXmS1yYSnrBGU8h20dMdykSQ+9XuZNwLRr2AnErL7ZUXuNASZJCSqXpNqDMjJcPKDo9Qzv7N0euMZIW4gF8hseB2q42zFYKeesatfRhLuScOGt4VJYyVEnarg4U0uuxy8wypE8cvkAu3+bACvRY4a7HoVpf6oz6/2Ry/AEywUznTF7ZIZcNFyWh3rkEAZ7/sjFwFE2HfB5zuX9ahJ1i1yAnfAEERpu5s9GQxe4cGxouZAzivIJl6cmwnbfu6fcAr3zgnte4k71vTzoiy5XsWSYx8/1ndsZAnyQbBwTM9/8C3HqG//KB/8ay3Nun5a54TWumI0r8O/FZs9dFZ/H8x4P6jGe+YTLwjH/2HN94UbFQd+NDZN4Vsa4fcyW6xUapTgKJnpQNxnz98ZdSUJElz3jGvGw49XWN1yjy0lwTlnuR+2SnU0a+kke1VjnLmO9MnbG6r7v4ih5Gs/Gq7qW2miCeoVFbRfEJ5gr2iWux3aT0FPX+rw2n6ZZYC5zbX1GAcM1HhvHQBe5nriBy57MuJ6I7EqxHFe+5no0tp+E79xwdX28plKyn5bn+fd3kxtl99KEWl7XeWvCQQR5kmS7vah09dkRj19UqTBryJd+CjsQ43zIs6wOfoWWC/XcfIyafqrtXR+r24Q2XtNrvyEYu7YSXOjuA1JQtxIY2PrVHMWhLUExotsPLUTQ07Y66X1My05j6oHrPemv/m7wfvPdYFNRgYrBPeol9/8PkxBRx8kXRu/hpfQb+1hh8igxHUhDXwq/kUv6yXfg/Br71r6dkEFBJhXZKv0D9s2/Fyhr482x4+LPvfybf6cQ8ncZobnkE4NvvOATYzP8B89dO0RmcdHrAAAAAElFTkSuQmCC"
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} dir='rtl'>
            <Stack as={'nav'} spacing={4} color={'#fff'}>
              {Links.map((link) => (
                <span onClick={() => handleClick(link.link)}>
                  <NavLink key={link.text} link={link.link}>
                    {link.text}
                  </NavLink>
                </span>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
