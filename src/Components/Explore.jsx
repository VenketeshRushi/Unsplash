import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "./Explore.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";





function Explore() {



    const [data, setData] = useState([]);

    useEffect(() => {
      imagelink();
    }, []);
  
    const imagelink = () => {
      return axios
  
        .get(
          "https://api.unsplash.com/search/photos?page=2&query=city&limit=30&client_id=1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo"
        )
        .then((res) => {
          setData(res.data.results);
        });
    };



  return (
    <>
    <Navbar/>
      <Box width="40%" marginLeft="15%" marginTop="5%">
        <Heading alignItems="left" size="2xl" textAlign="left">
          Explore Unsplash photos
        </Heading>
        <Text fontSize="20px" textAlign="left" marginTop="1.5%">
          Unsplash has over a million free high-resolution photos.Explore these
          popular photo Explore these popular photo categories on Unsplash.All
          photos here are free to download and use under the Unsplash License
        </Text>
      </Box>

      <Box>
        <Heading size="xl" marginTop="3%" marginLeft="-20%" >
          Browse thousands of free images on Unsplash
        </Heading>

        <Box
          display="flex"
          justifyContent="space-evenly"
          width="80%"
          marginLeft="15%"
          alignItems="left"
          marginTop="2%"
        >
             

             <Box display="flex">

          <Box>

          <Box width="85%" >
            <img src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib" alt="IMG" className="exp-img-box" />
          </Box>
            <Text>Download free desktop and mobile backgrounds</Text>
            <Button>Iphone Wallpapers</Button>
            <Button>Cool Wallpapers</Button>
          </Box>
          <Box>
            <Box width="85%">
              <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2" alt="IMG" className="exp-img-box" />
            </Box>
            <Text>Download amazing photos and pictures for free.</Text>

            <Button>Free Stock Photos</Button>
            <Button>Nature Images</Button>
          </Box>
          <Box>
            <Box width="85%">
              <img src="https://images.unsplash.com/photo-1542995470-870e12e7e14f?ixlib" alt="IMG" className="exp-img-box" />
            </Box>

            <Text>Discover your next desktop or mobile wallpaper.</Text>
            <Button>Cool Backgrounds</Button>
            <Button>Desktop Backgrounds</Button>
          </Box>
        </Box>
      </Box>
      </Box>
      <Heading size="xl">Free high-resolution Unsplash photos </Heading>


          
          <Box>

          <div className="exp-render" >
          {data?.map((e) => (
            
           
              <img  src={e.urls.raw} alt="img" />
              
                  
       
          ))}
          </div>
          </Box>



    </>
  );
}

export default Explore;
