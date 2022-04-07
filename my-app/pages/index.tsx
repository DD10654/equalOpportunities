import type { NextPage } from 'next'
import { useState } from 'react';
import Image from 'next/image'
import { AppShell, Burger, Header,  MantineProvider, MediaQuery, Navbar, Paper, Text, useMantineTheme, ActionIcon, createStyles, Accordion, TypographyStylesProvider, Tabs, Center, SimpleGrid, Title, RingProgress } from '@mantine/core'
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
        <Image src="/image12.jpeg" width="1500" height="300" className='rounded-lg' />
      </Center>
      <Tabs>
      <Tabs.Tab label="Poverty Introduction">
      <Accordion
      styles={{
          label: { fontSize: 24},
        }}
      >

          <Accordion.Item label="What is Poverty?">
            <SimpleGrid cols={3}>
              <Image src="/image4.jpeg" width="600" height="400" className="rounded-lg" />
              <p className="text-4xl">Poverty is when a person cannot afford their basic human needs like food,water etc.</p>
            </SimpleGrid>
            
          </Accordion.Item>
          <Accordion.Item label="What are the types of poverty?">
          <SimpleGrid cols={3}>
            <Image src="/image5.jpeg" width="500" height="500" className="rounded-lg" />
              <p className="text-4xl">There are 3 types of poverty, each one worse than the last. Relative, Absolute & Extreme</p>
            </SimpleGrid>

          </Accordion.Item>
          <Accordion.Item label="How much % of the world lives in poverty?">
            <Center className="flex">
              <RingProgress
                size={190}
                thickness={10}
                roundCaps
                sections={[
                  { value: 9.2, color: 'cyan' }
                ]}
                label={          
                  <Text color="blue" weight={700} align="center" size="xl">
                    9.2%
                  </Text>
              }
            />
              <p className="text-4xl">9.2 percent of the world lives in poverty.</p>
            </Center>
          </Accordion.Item>
          <Accordion.Item label="What is the main cause of poverty?">
            <SimpleGrid cols={3}>
              <Image src="/image6.jpeg" width="500" height="500" className="rounded-lg" />
              <p className="text-4xl">Inequality and Discrimination</p>
            </SimpleGrid>
          </Accordion.Item>
        </Accordion>
      </Tabs.Tab>
      <Tabs.Tab label="Causes & Effects of Poverty">
      <Accordion      
      styles={{
          label: { fontSize: 24},
        }}>
      <Accordion.Item label="Cause Inequality">
        <SimpleGrid cols={3}>
          <Image src="/image7.jpeg" width="300" height="350" className="rounded-lg" />
          <p className="text-4xl">Inequality of Income can lead to less money, which of course leads to Poverty.</p>
        </SimpleGrid>
      </Accordion.Item>
      <Accordion.Item label="Cause Wars">
        <SimpleGrid cols={3}>
        <Image src="/image8.jpeg" width="300" height="350" className="rounded-lg" />  
        <p className="text-4xl">Wars have more than one missile. So with your money blown up, e-cash databases are blown up. Stocks Going Down, like The Great Depression. It can also ruin, or destroy resources.</p>
        </SimpleGrid>
      </Accordion.Item>
      <Accordion.Item label="Cause Migration Issues">
        <SimpleGrid cols={3}>
          <Image src="/image9.jpeg" width="300" height="350" className="rounded-lg" />  
          <p className="text-4xl">Migration issues can also escalate poverty and hunger as the refugees might not have jobs in different countries where they migrate.</p>
        </SimpleGrid>
      </Accordion.Item>
      <Accordion.Item label="Cause Unemployment">
        <SimpleGrid cols={3}>
          <Image src="/image10.jpeg" width="300" height="350" className="rounded-lg" />  
          <p className="text-4xl">Unemployment means no money, and no money means you will, gradually, shift to Poverty.</p>
        </SimpleGrid>
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
      <Tabs.Tab label="GDP">
        <SimpleGrid cols={2}>
          <div>
            <Title>Gross Domestic Product (GDP)</Title>
            <p className="ml-1 mt-5">
It is the market value of all finished goods and services

Every time a finished good, service or product is sold, we add it to the price

At the end of the year, we get the total, that is our GDP

How to find the GDP, add investments, government spending, customer spending & minus taxes and imports

GDP is all about FINISHED goods and services, meaning if you made a cake out of butter and eggs, the cake will be added to the GDP, not the egg & butter

But if the egg is sold to a customer, it is counted in the GDP, since it will not resold, it's not counted in the GDP

There are goods that are used to make other goods and are still considered finished goods, these are called Capital Goods

Even though Tractors are used to get crops, it won’t be resold, so it’s a Capital Good

GDP is the market value of goods and services sold within a country.

If an old house is resold, it's not counted in the GDP since it was not originally sold that year.

The part ‘within a country’ confuses a lot of people, a simple definition is basically when USA imports something from france, it adds to France's GDP, and if France imports something from USA, it adds to USA’s GDP
</p>
          </div>
          <Image src="/image11.png" width="300" height="450"/>
        </SimpleGrid>
      </Tabs.Tab>
      <Tabs.Tab label="3 Theories">
        <SimpleGrid cols={1}>
          <div>
            <Title>Charities provide basic needs ONLY</Title>
            <p className="ml-1 mt-5">In 1 charity, there was a mother whose name is disclosed with a daughter called ‘Jackie’. After a few years in charity, Jackie’s mom died and Jackie got a daughter. The people who ran the charity noticed similar stories with some other people.  After some testing they realised that if a kid grew up in charities, then they would live there till their death. That charity then started teaching kids how to work and the results went better than expectations! The kids would not need the charity by the time they were 16-17!</p>
          </div>
        </SimpleGrid>
        <br /><hr /><br />
        <SimpleGrid cols={1}>
          <div>
            <Title>A Dying Baby</Title>
            <p className="ml-1 mt-5">Imagine this, you go to a store and buy 200$ shoes. Then while going back, you cross the lake and see a baby dying. No one else was around to save her, so it was up to you. It was pretty divided! 50/50! They creators changed it from 200$ or changed the gender of the baby. But the breaking change was when there were other people who clearly saw the baby dying but didn’t care. Everybody said NO! This is sad, if you can save a life at little cost to yourself. You should do it!</p>
          </div>
        </SimpleGrid>
        <br /><hr /><br />
        <SimpleGrid cols={1}>
          <div>
            <Title>Lifeboat</Title>
            <p className="ml-1 mt-5">People took the ‘little cost to yourself’ a bit too far. So just to make sure people don’t go wild, a 3rd party had another Theory! Imagine this, you are on a boat with 50 people, and you have food for 50. But the boat can fit 60 people and 40 people are drowning, what will you do? You cannot get all 40, otherwise it will sink! If you get 10 people, in the last few days you will starve, or might die! The best way is to do nothing. iIf you have at least 1 spare life saver or 1 slice of pizza left, you can help them, but their faith is mostly sealed!</p>
          </div>
        </SimpleGrid>
      </Tabs.Tab>
      <Tabs.Tab label="2 Ways To End Poverty">
        <SimpleGrid cols={1}>
          <div>
            <Title>Improving the management of food, water, and sanitization</Title>
            <p className="ml-1 mt-5">If the rich waste everything, how will we help the poor? It is estimated that 1.3 billion tonnes of food is wasted, that is worth about 1 trillion dollars! And after that, we barely even make wells for the poor.</p>
          </div>
        </SimpleGrid>
        <br /><hr /><br />
        <SimpleGrid cols={1}>
          <div>
            <Title>Give out a job</Title>
            <p className="ml-1 mt-5">Most companies don’t hire until it's a big emergency. If we give out for jobs often, the company will be safer and the ones in poverty have a chance! Or if you find someone with talent who is being overshadowed with Poverty, help them. Maybe post a video of them on Social Media! It will help them</p>
          </div>
        </SimpleGrid>
      </Tabs.Tab>
    </Tabs>

    </AppShell>
    </Paper>
    </MantineProvider>
  )
}

export default Home
