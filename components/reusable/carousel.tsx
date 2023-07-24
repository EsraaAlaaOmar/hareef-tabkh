import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'هالة صدقى تحصد جائزة أفضل ممثلة  ',
      text:
        'حصدت النجمة هالة صدقى "افضل ممثلة في الوطن العربى" من مهرجان الأفضل الذى يقام في لبنان من كل عام، وأعربت هالة عن سعادتها بحصولها على الجائزة والاهتمام التي تحظى به من قبيل أغلب المهرجانات في العالم العربى',
      image:
        '',
    },
    {
      title: 'بيت الروبى يضيف مليونا و332 ألف ',
      text:
       'حافظ فيلم "بيت الروبى" للنجم كريم عبد العزيز على تصدره قائمة الإيرادات اليومية، حيث حصد أمس الخميس إيرادات بلغت مليونا و332 ألفا جنيها ، فى دور العرض السينمائية المختلفة، ليصل إجمالي ما حققه الفيلم خلال الفترة الماضية 97 مليونا .',
      image:
        '',
    },
    {
      title: 'محمد عبد الرحمن "توتا" يقدم شخصية سوكا أبو حديدة إمبراطور التزوير في البعبع',
      text:
        'مازال الفنان محمد عبد الرحمن توتا، يحصد النجاحات في دور العرض السينمائى، حيث يشارك في فيلمين أولهما فيلم "البعبع" مع النجم أمير كرارة، والذى يعرض في جميع السينمات المصرية والعربية، محققاً أكثر من 30 مليون جنيه منذ انطلاق عرضه في السينمات، وحصد توتا على إشادات واسعة من قبل الجمهور ورواد الفيلم والنقاد على دوره في العمل، الذى يقدم من خلاله شضخصية سوكا أبو حديدة "إمبراطور التزوير" في الفيلم.',
      image:
        '',
    },
  ];

  const router = useRouter();
  const handleClick = () => {
    router.push('/SingleNews');
  };

  return (
    <Box
      position={'relative'}
      maxHeight={'300px'}
      width={'full'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        {/* <BiLeftArrowAlt size="40px" /> */}
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        {/* <BiRightArrowAlt size="40px" /> */}
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={`url(${card.image})`} >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
  
              <Stack
                spacing={6}
              //  w={'full'} 
                maxW={'lg'}
                position="absolute"
                dir={'rtl'}
                top="30%"
                bgColor="rgba(0, 0, 0, 0.6)"
              
                w="100%"
                ml="-4%"
                p="5px"
                transform="translate(0, -50%)">
                          <Link href='/' className="section-title">
   اخر الاخبار
    </Link>
                <Heading fontSize={"22px"} color={"#ff7900"} >
                  {card.title}
                </Heading>
                <Text fontSize={"16px"} color="#fff"  onClick={handleClick}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}