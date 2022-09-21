import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import "./Dropdown.css";
function Dropdown() {
  return (
    <>
      <Box className="drop-box">
        <SimpleGrid columns={[3, 3, 3, 3]}>
          <Box>
            <Heading size="sl">Company</Heading>
          </Box>
          <Box>
            <Heading size="sl">Product</Heading>
          </Box>
          <Box>
            <Heading size="sl">Community</Heading>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={[3, 3, 3, 3]}>
          <Box lineHeight="40px" alignItems="left">
            <Text>About</Text>
            <Text>History</Text>
            <Text>Join the team</Text>
            <Text>Press</Text>
            <Text>Contact Us</Text>
            <Text>Help Center</Text>
          </Box>
          <Box lineHeight="40px" alignItems="left">
            <Text>Developers/API</Text>
            <Text>Unsplash Dataset</Text>
            <Text>Unsplash for ios</Text>
            <Text>Apps & plugins</Text>
          </Box>
          <Box lineHeight="40px" alignItems="left">
            <Text>Become a contributor</Text>
            <Text>Topics </Text>
            <Text>Collections</Text>
            <Text>Trends</Text>
            <Text>Unsplash Awards</Text>
            <Text>Stats</Text>
          </Box>
        </SimpleGrid>

        <Box display="flex">
          <Box marginTop="5%">
            <SimpleGrid columns={4} columnGap="10px">
              <Box> License</Box>
              <Box>Privacy Policy</Box>
              <Box>Terms</Box>
              <Box>Security</Box>
            </SimpleGrid>
          </Box>
          <Box marginTop="5%" marginLeft="7%">
            English
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Dropdown;
