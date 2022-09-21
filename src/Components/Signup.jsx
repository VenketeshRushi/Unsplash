import { Box, Button, Container, Heading, Input, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
function Signup() {
  let navigate = useNavigate();

  const loginclick = () => {
    navigate("/login");
  };
  return (
    <>
      <Box display="flex">
        <Box className="Sign-up-backgroundimg">
          <Box marginLeft="2%">
            <Heading size="xl" textAlign="left" fontSize="35px" marginTop="58%">
              Creation starts here
            </Heading>
            <Heading
              width="60%"
              size="sm"
              fontWeight="600"
              textAlign="left"
              fontSize="18px"
            >
              Access 4,207,274 free,high-resolution photos you can't find
              anywhere else
            </Heading>
          </Box>

          <Text textAlign="left" marginLeft="5%" marginTop="58%">
            Uploaded about 3 hours ago by sergey Zigle
          </Text>
        </Box>

        <Box marginLeft="10%" marginTop="11%">
          <Box>
            <Heading size="xl">Join Unsplash</Heading>
            <Text lineHeight="50px">
              Already have an account <Link to="/login">Login</Link>
            </Text>
          </Box>

          <Box marginTop="1%" lineHeight="30px">
            <Button bgColor="#1778f2" width="95%" color="white">
              Join using Facebook
            </Button>
            <Text lineHeight="50px">OR</Text>
          </Box>
          <Box display="flex">
            <Box textAlign="left">
              <Text>First name</Text>
              <Input></Input>
            </Box>
            <Box textAlign="left" marginLeft="2%">
              <Text>Last name</Text>
              <Input></Input>
            </Box>
          </Box>
          <Box textAlign="left" marginTop="1%">
            <Text>Email</Text>
            <Input></Input>
          </Box>
          <Box textAlign="left" marginTop="1%">
            <Text>Username </Text>
            <Input></Input>
          </Box>
          <Box textAlign="left" marginTop="1%">
            <Text>Password</Text>
            <Input></Input>
          </Box>
          <Box marginTop="4%">
            <Button
              onClick={loginclick}
              bgColor="black"
              width="95%"
              color="white"
            >
              Join
            </Button>
          </Box>
          <Box marginTop="2%">
            <Text>By joining ,you agree to the Terms and privacy Policy</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Signup;
