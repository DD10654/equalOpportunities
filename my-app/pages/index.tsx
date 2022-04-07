import type { NextPage } from 'next'
import { useState } from 'react';
import Image from 'next/image'
import { AppShell, Burger, Header,  MantineProvider, MediaQuery, Navbar, Paper, Text, useMantineTheme, ActionIcon, createStyles, Accordion, TypographyStylesProvider, Tabs, Center, SimpleGrid, Title } from '@mantine/core'
import { Sun, MoonStars } from 'tabler-icons-react';


const Home: NextPage = () => {

  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const [dark, setDark] = useState(false);

  return (
    <MantineProvider theme={{ loader: "oval", colorScheme: dark ? 'light' : 'dark',  }}   styles={{
      Text: (theme) => ({
        root: {
          color: theme.colorScheme === 'dark' ? 'white' : 'black',
        },
      }),
    }}>
    <Paper shadow="xs" radius="xs" p="md" withBorder>
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={
        <Header height={70} p="md" className="bg-gradient-to-r from-green-300 via-emerald-500 to-teal-900">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>

            <Text className='text-gradient text-center font-bold text-[2.75rem] from-indigo-400 via-purple-500 to-indigo-600 mr-5'>Equal Opportunities</Text>

          </div>

        </Header>
      }
    >
      <Center className="mb-10">
        <Image src="/image3.png" width="800" height="400" className='rounded-lg' />
      </Center>
    <Tabs>
      <Tabs.Tab label="Poverty Introduction">
        <Accordion>
          <Accordion.Item label="What is Poverty?">
            Poverty is when a person cannot afford their basic human needs like food, water etc.
          </Accordion.Item>
          <Accordion.Item label="What are the types of poverty?">
            There are 3 types of poverty, each one worse than the last. Relative, Absolute & Extreme.
          </Accordion.Item>
          <Accordion.Item label="How much % of the world lives in poverty?">
            9.2 percent of the world lives in poverty.
          </Accordion.Item>
          <Accordion.Item label="What is the main cause of poverty?">
            Inequality and Discrimination

          </Accordion.Item>
        </Accordion>
      </Tabs.Tab>
      <Tabs.Tab label="Causes & Effects of Poverty">
      <Accordion>
      <Accordion.Item label="Cause Inequality">
        Inequality of Income can lead to less money, which of course leads to Poverty.
      </Accordion.Item>
      <Accordion.Item label="Cause Wars">
        Wars have more than one missile. So with your money blown up, e-cash databases are blown up. Stocks Going Down, like The Great Depression. It can also ruin, or destroy resources.
      </Accordion.Item>
      <Accordion.Item label="Cause Migration Issues">
        Migration issues can also escalate poverty and hunger as the refugees might not have jobs in different countries where they migrate.
      </Accordion.Item>
      <Accordion.Item label="Cause Unemployment">
        Unemployment means no money, and no money means you will, gradually, shift to Poverty.
      </Accordion.Item>
      </Accordion>
      <br /><br />
      <Text>Effects of Poverty:</Text>
      <br />
      <ul className="list-disc ml-5">
        <li>Poor Health</li>
        <li>Crime</li>
        <li>Lack of Education</li>
        <li>Hunger</li>
        <li>Homelessness</li>
      </ul>
      </Tabs.Tab>
      <Tabs.Tab label="2 Inspiring People">
        <SimpleGrid cols={2}>
          <div>
            <Title>Oprah Winfrey</Title>
            <p className="ml-1 mt-5">Oprah Winfrey is a Americian Talk show host who was the richest Black/Africian-Americian Billionare in the 20th Century. She was born in a poor single teenage mother which lived in Mississppi. Oprah got a child in the age of 15 who died pretty early in life. Then Oprah was sent to a person she called her father. His name was Vernon Winfrey, a barber in Nashville, Tennessee. She then went to High School, and still while in High School landed a job. By 19 She was a Co-anchor for the Local Evening News. In 2002 Oprah Winfrey and South Africian President Nelson Mandela were talking about how to combat Poverty, Oprah Winfrey though about making a school for Girls. 528 Girls Graduated from OWLAG (The Oprah Winfrey Leadership Academy for Girls). 90% of Girls who attend Collage after graduating from OWLAG pass.</p>
          </div>
          <Image src="/image1.jpeg" width="300" height="450"/>
        </SimpleGrid>
        <br /><hr /><br />
        <SimpleGrid cols={2}>
          <div>
            <Title>Ban Ki-moon</Title>
            <p className="ml-1 mt-5">Born June 13th 1944 is a South Korean politician and diplomat who had served eigth secretery general (2007-16) of the U.N (United Nations). At age 18 Ban had won a competition that took him to the White House to meet U.S President John F. Kennedy, a visit that Ban claimed most inspired his public career. He received a bachelor’s degree in 1970 on international relations from Seoul National University and earned a master’s degree in 1985 from the John F. Kennedy School of Government at Harvard University. He is one of the people that helped creating the SDG goals to make a better world.</p>
          </div>
          <Image src="/image2.jpeg" width="300" height="370"/>
        </SimpleGrid>
      </Tabs.Tab>
    </Tabs>

    </AppShell>
    </Paper>
    </MantineProvider>
  )
}

export default Home
