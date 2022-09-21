import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
  let arr = [
    "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib",
  ];

  return (
    <>
      <Box>
        <Box>
          <Link to="/">
            <img
              width="5%"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAAD39/eVlZVhYWHt7e2YmJisrKydnZ3AwMAuLi7V1dWoqKibm5v09PSQkJB1dXUdHR1aWlrVATWbAAABDklEQVR4nO3ZSxaCMAxAUUUFFfG3/8U6t5OAVVLPvQvIyeuw2WwAAAAAAAAAAAAAAELG/hjVj2svu8hlG3dZe9lFhhmFw9rLLqJQYX4KFeanUGF+ChXmp1BhfgoV5qdQYX4KFeanUGF+Ctsv/P/r2jiFL6RTmxdSAAAAIL3rIeC65sAPdbfI79JuxsRdZOCt+1rRuy60UD9jYh96MoX1KFRYUqiwNoUKSwoV1qZQYUmhwtoUKiwpVFibQoUlhQprU6iw1GbhNGPi1GTh/RR3b7LwcY57NFlYnUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQoUKFLRYOz/3vPYffFQIAAAAAAAAAAAAAAPyxF6hYLRF9pu91AAAAAElFTkSuQmCC"
              alt="logo"
            ></img>
          </Link>
        </Box>
        <SimpleGrid
          columns={[3, 3, 4, 6]}
          columnGap="5%"
          width="60%"
          margin="auto"
          marginTop="-3%"
          fontSize="16px"
          fontWeight="600"
        >
          <Box>
            <Link to="/">Home</Link>
          </Box>
          <Box>
            {" "}
            <Link to="/commonpage/Accouncement">Accouncement</Link>
          </Box>
          <Box>
            {" "}
            <Link to="/commonpage/Products">Products</Link>
          </Box>
          <Box>
            {" "}
            <Link to="/commonpage/Brands">Brands</Link>
          </Box>
          <Box>
            {" "}
            <Link to="/commonpage/Partnerships">Partnerships</Link>
          </Box>
          <Box>
            {" "}
            <Link to="/commonpage/Community">Community</Link>
          </Box>
        </SimpleGrid>
      </Box>

      <Box marginTop="6%">
        <Heading size="3xl">Unsplash Blog</Heading>
        <Heading marginTop="1%" size="md" color="gray" fontWeight="400">
          Stories from the community powering the internet’s visuals
        </Heading>
      </Box>

      <Heading size="2xl" marginLeft="-55%" marginTop="12%">
        Featured
      </Heading>

      <SimpleGrid
        columns={[1, 1, 2, 2]}
        width="100%"
        className="inner-outerdiv-blog"
      >
        <Box className="inner-div-blog">
          <img src="https://unsplash.com/blog/content/images/size/w1000/2022/08/A-look-back-at-July--Blog--1.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog">
          <img src="https://unsplash.com/blog/content/images/2022/03/Blog-compress-2.gif" />
          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">Unsplash for good</Heading>
            <Text marginBottom="40px">Unsplash team March 2,2022</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Heading textAlign="left" marginLeft="5%" size="2xl" marginTop="8%">
        Latest from the team
      </Heading>

      <SimpleGrid
        width="90%"
        marginLeft="5%"
        columns={[1, 1, 3, 3]}
        marginTop="2%"
      >
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/03/Back-to-basics---Stats--Blog--4.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>

        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/08/Girls-vs-Stereotypes-c-1.gif" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Documenting-Life-s-Moments--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        width="90%"
        marginLeft="5%"
        columns={[1, 1, 3, 3]}
        marginTop="2%"
      >
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Susan-Wilkinson--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>

        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/07/A-look-back-at-June--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Documenting-Life-s-Moments--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        width="90%"
        marginLeft="5%"
        columns={[1, 1, 3, 3]}
        marginTop="2%"
      >
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/06/DeepMind--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>

        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Tim--Blog--2.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/06/Amy-Shamblen--Twitter-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        width="90%"
        marginLeft="5%"
        columns={[1, 1, 3, 3]}
        marginTop="2%"
      >
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/06/pride-Twitter-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>

        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/The-Importance-of-Editing--Blog--3.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/04/Bruno--Blog--1.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        width="90%"
        marginLeft="5%"
        columns={[1, 1, 3, 3]}
        marginTop="2%"
      >
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Color-of-Water-Winners--Twitter--2.gif" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>

        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/Frankie_Cordoba_-Twitter--3.jpeg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
        <Box className="inner-div-blog-second">
          <img src="https://unsplash.com/blog/content/images/size/w600/2022/05/April-Round-up--Blog-.jpg" />

          <Box lineHeight="35px" textAlign="left" marginLeft="2%">
            <Text>Announcements</Text>
            <Heading size="lg">A Look back on july</Heading>
            <Text marginBottom="40px">Unsplash for good</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Button>Load more posts</Button>
    </>
  );
}

export default Blog;
