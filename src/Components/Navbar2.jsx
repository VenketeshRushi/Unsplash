import { Box, Stack, Text } from "@chakra-ui/react";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Navbar2.css";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "gray",
        opacity: "70%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "white+-" }}
      onClick={onClick}
    />
  );
}

export default class Navbar2 extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 400,
      slidesToShow: 13,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const initial = [
      <Link to="/commonpage/current-events">Current Events</Link>,
      <Link to="/commonpage/Wallpapers">Wallpapers</Link>,
      <Link to="/commonpage/3D Renders">3D Renders</Link>,
      <Link to="/commonpage/textures-patterns">Textures</Link>,
      <Link to="/commonpage/Experimental">Experimental</Link>,
      <Link to="/commonpage/Architecture">Architecture</Link>,
      <Link to="/commonpage/Nature">Nature</Link>,
      <Link to="/commonpage/BusinessWork">Business</Link>,
      <Link to="/commonpage/Fashion">Fashion</Link>,
      <Link to="/commonpage/Film">Film</Link>,
      <Link to="/commonpage/food and drink">Food </Link>,
      <Link to="/commonpage/HealthWellness">Health </Link>,
      <Link to="/commonpage/Interiors">Interiors</Link>,

      <Link to="/commonpage/StreetPhotography">Street Photography</Link>,
      <Link to="/commonpage/Travel">Travel</Link>,
      <Link to="/commonpage/Animals">Animals</Link>,
      <Link to="/commonpage/Spirituality">Spirituality</Link>,
      <Link to="/commonpage/Spirituality">Spirituality</Link>,

      <Link to="/commonpage/Experimental">Experimental</Link>,
      <Link to="/commonpage/Architecture">Architecture</Link>,
      <Link to="/commonpage/Nature">Nature</Link>,
      <Link to="/commonpage/BusinessWork">Business</Link>,
      <Link to="/commonpage/Fashion">Fashion</Link>,
      <Link to="/commonpage/Film">Film</Link>,
      <Link to="/commonpage/food and drink"> Drink</Link>,
      <Link to="/commonpage/HealthWellness"> Wellness</Link>,
      <Link to="/commonpage/Interiors">Interiors</Link>,
    ];

    return (
      <>
        <Box display="flex">
          <Box>
            <Text className="underline" as="u">
              <Link to="/">Editorial</Link>
            </Text>
          </Box>
          <Box width="91%" marginLeft="3%">
            <Slider {...settings}>
              {initial.map((e) => (
                <Stack direction={"row"}>
                  <Text width="140%">{e}</Text>
                </Stack>
              ))}
            </Slider>
          </Box>
        </Box>
      </>
    );
  }
}
