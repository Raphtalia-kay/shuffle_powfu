import React from "react";
import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";

const mockdata = [
  {
    title: "Powfu, Ouse, & Snøw Collaborate on New EP, “Flooding The Gates”",
    image:
      "https://preludepress.b-cdn.net/wp-content/webp-express/webp-images/uploads/2023/07/Flooding-The-Gates-EP.jpg.webp",
    date: "July 2, 2023",
  },
  {
    title: "Powfu Spars With Ollie On New Single ‘crow’s nest’",
    image: "https://www.clashmusic.com/wp-content/uploads/2023/03/powfu.jpg",
    date: "March 27, 2023",
  },
  {
    title: "Powfu Talks Taylor Swift ‘Mine’ Cover, New Album & More",
    image:
      "https://www.billboard.com/wp-content/uploads/2022/12/BBWebsite_BBNews_12.1_powfu_thumb.jpg?w=1024",
    date: "December 2, 2022",
  },
//   {
//     title:
//       "Powfu, the lo-fi rapper who became a Covid-era star without leaving his bedroom",
//     image:
//       "https://i.guim.co.uk/img/media/cac17663240b12e92e6b9bf16e3ccf03459967ab/488_410_2101_1261/master/2101.jpg?width=1300&dpr=2&s=none",
//     date: "June 04, 2021",
//   },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",
    backgroundColor : "",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
    fontSize: "lg",
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="sm"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={4/3}>
        <Image src={article.image} height={300} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="xl">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container className=" m-0 pl-0 pr-0 max-w-[100%] pt-0 pb-0" py="xl">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: "", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
