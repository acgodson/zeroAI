import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Text,
  Divider,
  Flex,
  Stack,
} from "@chakra-ui/react";
import {
  FaHamburger,
  FaFilter,
  FaHeartbeat,
  FaDumbbell,
  FaPlane,
  FaBitcoin,
  FaGlobe,
} from "react-icons/fa";

export default function MarketplaceHeader({
  tabIndex,
  setTabIndex,
}: {
  tabIndex: number;
  setTabIndex: any;
}) {
  const categories = [
    {
      title: "Food",
      icon: <FaHamburger />,
    },
    {
      title: "Health",
      icon: <FaHeartbeat />,
    },
    {
      title: "Fitness",
      icon: <FaDumbbell />,
    },
    {
      title: "Travel",
      icon: <FaPlane />,
    },
    {
      title: "Crypto",
      icon: <FaBitcoin />,
    },
    {
      title: "Culture",
      icon: <FaGlobe />,
    },
  ];

  return (
    <>
      <Box
        textAlign={"center"}
        fontSize={["md", "md", "2xl"]}
        fontWeight={"semibold"}
        letterSpacing={"1.25px"}
      >
        Build your AI Agent with Specialized Datasets
      </Box>

      <Box w="100%" px={8} py={12}>
        <HStack alignItems={"center"}>
          <Flex
            gap={5}
            w="80%"
            overflowY={"hidden"}
            overflowX={"auto"}
            css={{
              "::-webkit-scrollbar": {
                height: "8px",
              },
              "::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
              },
              "::-webkit-scrollbar-thumb:hover": {
                background: "red",
              },
              "scrollbar-width": "thin",
              "scrollbar-color": "#888 transparent",
            }}
          >
            {categories.map((category, i) => (
              <Box
                key={i}
                borderRadius={"8px"}
                px={8}
                py={2}
                color={tabIndex === i + 1 ? "#D968D0" : "white"}
                border={`0.8px solid ${
                  tabIndex === i + 1 ? "#D968D0" : "#1e1f23"
                }`}
                display="flex"
                alignItems="center"
                mb={4}
                cursor={"pointer"}
                onClick={() => setTabIndex(i + 1)}
              >
                <Avatar
                  icon={category.icon}
                  rounded={"full"}
                  w="30px"
                  bg={"transparent"}
                  color={tabIndex === i + 1 ? "#D968D0" : "#7c8693"}
                  mr={2}
                />
                <Text fontWeight={"bold"} fontSize={"xs"}>
                  {category.title}
                </Text>
              </Box>
            ))}
          </Flex>
          <Box
            borderRadius={"8px"}
            px={8}
            py={2}
            ml={4}
            mt={-4}
            bg="#1e1f23"
            border="0.8px solid #1e1f23"
          >
            <Flex align={"center"}>
              <Avatar
                icon={<FaFilter />}
                rounded={"full"}
                w="30px"
                bg={"transparent"}
                color={"#7c8693"}
              />
              <Text fontWeight={"bold"} fontSize={"xs"}>
                Filters
              </Text>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
