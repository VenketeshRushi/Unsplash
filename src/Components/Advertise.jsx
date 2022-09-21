import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import "./Advertise.css";
import Navbar from "./Navbar";

function Advertise() {
  let arr = [
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-grammarly.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-constantcontact.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-skillshare.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-bluehost.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-buzzfeed.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-msft.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-grammarly.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-constantcontact.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-skillshare.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-bluehost.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-buzzfeed.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-msft.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-grammarly.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-constantcontact.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-skillshare.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-bluehost.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-buzzfeed.svg?auto=format&fit=crop&q=60",
    "https://unsplash-assets.imgix.net/marketing/vertise/logos/indie/logo-msft.svg?auto=format&fit=crop&q=60",
  ];
  return (
    <>
      <Navbar />

      <Box display="flex" justifyContent="space-evenly" marginTop="5%">
        <Box marginTop="7%" textAlign="left" lineHeight="45px">
          <Heading size="2xl">Advertise on Unsplash</Heading>
          <Text fontSize="24px">
            The world's most popular creative platform
          </Text>
          <Button>
            <Text>Get in touch with us</Text>
          </Button>
        </Box>
        <Box width="35%">
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/header.png?auto=format" />
        </Box>
      </Box>

      <Text>
        Join the world’s biggest brands that we’re proud to call partners
      </Text>

      <Box></Box>

      <Box width="35%" margin="auto" marginTop="5%">
        <Heading size="xl">Direct Advertising</Heading>
        <Text fontSize="18px" lineHeight="30px">
          Direct ads are performance-driven placements. Built to generate
          traffic for brands and convert on customer acquisition KPIs. We create
          maximum impact with the following four paid placement opportunities
        </Text>
      </Box>
      <Box marginTop="10%" width="90%" marginLeft="5%">
        <img src="https://unsplash-assets.imgix.net/marketing/vertise/direct.png" />
      </Box>

      <SimpleGrid
        columns={[1, 2, 3, 4]}
        width="90%"
        marginLeft="6%"
        marginTop="3%"
      >
        <Box className="ad-box">
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/direct-download.svg" />
          <Heading size="md">Download</Heading>
          <Text>
            Associate your brand with user’s positive emotion of finding the
            perfect photo for their creation.
          </Text>
        </Box>
        <Box className="ad-box">
          {" "}
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/direct-feed.svg" />
          <Heading size="md">Download</Heading>
          <Text>
            Associate your brand with user’s positive emotion of finding the
            perfect photo for their creation.
          </Text>
        </Box>

        <Box className="ad-box">
          {" "}
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/direct-homepage.svg" />
          <Heading size="md">Download</Heading>
          <Text>
            Associate your brand with user’s positive emotion of finding the
            perfect photo for their creation.
          </Text>
        </Box>
        <Box className="ad-box">
          {" "}
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/direct-video.svg" />
          <Heading size="md">Download</Heading>
          <Text>
            Associate your brand with user’s positive emotion of finding the
            perfect photo for their creation.
          </Text>
        </Box>
      </SimpleGrid>

      <Button marginTop="3%">Get in touch with us</Button>

      <Box width="35%" margin="auto" marginTop="5%">
        <Heading size="xl">Native Advertising</Heading>
        <Text fontSize="18px" lineHeight="30px">
          Generate brand lift unseen on any other platform. It works simply by
          sharing your brand’s beautiful content on Unsplash in targeted search
          results. And in exchange, creators of the internet share your content
          with their audiences — in relevant trusted places.
        </Text>
      </Box>

      <Box marginTop="5%">
        <img src="https://unsplash-assets.imgix.net/marketing/vertise/native-banner.png" />
      </Box>

      {/* <Box marginTop="5%">

        <img src="https://unsplash-assets.imgix.net/marketing/vertise/logos/09-xps.svg"/>
      </Box> */}

      <Box display="flex" width="90%">
        <Box marginTop="15%" textAlign="left" marginLeft="5%" lineHeight="30px">
          <Heading size="md">Don’t have images readily available?</Heading>
          <Text>
            Take advantage of Unsplash Studio: work with Unsplash photographers
            to create custom content specifically intended for your campaign.
          </Text>
          <Button marginTop="5%">
            Get in touch to learn more about Studio
          </Button>
        </Box>

        <Box marginTop="10%" width="50%">
          <img src="https://unsplash-assets.imgix.net/marketing/vertise/studio.png?auto=format" />
        </Box>
      </Box>
    </>
  );
}
export default Advertise;
