import React from "react";
import everestPerson from "../images/EverestPerson.svg";

import { Box, Flex, Text, Image } from "rebass";
import StyledLink from "../components/presentational/StyledLink";
// TODO: Try using StyledLink from React Router again to see if it fixes 404

import SearchInput from "../components/stateful/SearchInput";

import {
  applicationTypes,
  infrastructureTypes,
  serviceTypes,
  contentTypes
} from "../constants/projects";

function getUserFacingSlug(projectName: string) {
  return projectName.toLowerCase().replace(/\s/g, "-");
}

export default function Home() {
  return (
    <div>
      <h2>Everest</h2>
      <Image
        src={everestPerson}
        sx={{
          width: ["100%", "40%", "10%"],
          borderRadius: 8
        }}
      />
      <SearchInput />
      {/* TODO: Maybe DRY these four sections up with a map */}
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="highlight">
            <h3>
              <StyledLink to={`/applications`}>Applications</StyledLink>
            </h3>
          </Text>
          <Text p={1} color="background" bg="muted">
            {applicationTypes.map((name, index) => {
              const filter = getUserFacingSlug(name);
              return (
                <p key={name}>
                  <StyledLink to={`/applications?projectSubtype=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="highlight">
            <h3>
              <StyledLink to={`/infrastructure`}>Infrastructure</StyledLink>
            </h3>
          </Text>
          <Text p={1} color="background" bg="muted">
            {infrastructureTypes.map((name, index) => {
              const filter = getUserFacingSlug(name);
              return (
                <p key={name}>
                  <StyledLink to={`/infrastructure?projectSubtype=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="highlight">
            <h3>
              <StyledLink to={`/services`}>Services</StyledLink>
            </h3>
          </Text>
          <Text p={1} color="background" bg="muted">
            {serviceTypes.map((name, index) => {
              const filter = getUserFacingSlug(name);
              return (
                <p key={name}>
                  <StyledLink to={`/services?projectSubtype=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="highlight">
            <h3>
              <StyledLink to={`/content`}>Content</StyledLink>
            </h3>
          </Text>
          <Text p={1} color="background" bg="muted">
            {contentTypes.map((name, index) => {
              const filter = getUserFacingSlug(name);
              return (
                // TODO: A div shouldn't be a descendant of
                // a p element
                <p key={name}>
                  <StyledLink to={`/content?projectSubtype=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
