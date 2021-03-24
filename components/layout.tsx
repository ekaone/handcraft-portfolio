import React from "react";
import { Box } from "@chakra-ui/react";
// components
import ParticlesBg from "./particles-bg";

interface ChildrenProps {
  children: React.ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return (
    <Box padding="1rem">
      {children}
      <ParticlesBg />
    </Box>
  );
}

export default Layout;
