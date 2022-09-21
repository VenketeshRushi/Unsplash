import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import MiddleHome from "./MiddleHome";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Searchbox from "./Searchbox";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    imagelink();
  }, []);

  const imagelink = () => {
    return axios

      .get(
        "https://api.unsplash.com/search/photos?page=2&query=nature&limit=30&client_id=1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo"
      )
      .then((res) => {
        setData(res.data.results);
      });
  };

  return (
    <>
      <Navbar />
      <Navbar2 />

      {/* <MiddleHome /> */}

      <Searchbox />

      <div className="box">
        {data?.map((e) => (
          <img src={e.urls.raw} alt="img" />
        ))}
      </div>
    </>
  );
}
export default Home;

//https://api.unsplash.com/search/photos?page=1&query=office&client_id=1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo

// 1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo

// S7J4d8-Yuu-8aru4l2rVthNkpMiCdXev1tvsFIHCJ5Q
