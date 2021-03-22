import React from "react";
import { Box } from "@chakra-ui/react";

interface ChildrenProps {
  children: React.ReactNode;
}

function Layout({ children }: ChildrenProps) {
  return <Box padding="1rem">{children}</Box>;
}

export default Layout;
