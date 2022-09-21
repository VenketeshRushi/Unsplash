import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./CommonPage.css";

function CommonPage() {
  const [data, setData] = useState([]);
  const params = useParams();

  console.log(params);

  useEffect(() => {
    imagelink();
  }, []);

  const imagelink = () => {
    return axios

      .get(
        `https://api.unsplash.com/search/photos?page=2&query=${params.id}&limit=30&client_id=1TDSAOZE_7IRzQX9vcWwVMu-GgV80r3-69flNb9VpIo`
      )
      .then((res) => {
        setData(res.data.results);
      });
  };

  return (
    <>
      <Heading marginTop="5%" sixe="2xl">
        {params.id}
      </Heading>
      <Box marginTop="5%" className="common-box">
        {data?.map((e) => (
          <img src={e.urls.raw} alt="img" />
        ))}
      </Box>
    </>
  );
}
export default CommonPage;
