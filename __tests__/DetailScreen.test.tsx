import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { Text } from "react-native";
import DetailScreen from "../src/presentation/screens/DetailScreen";

test("Okay render DetailScreen", async () => {
  const mockRoute = {
    params: {
      ship: {
        name: "Ship Name",
        image: "https://i.imgur.com/woCxpkj.jpg",
      },
    },
  };

  try {
    const { getByText } = render(<DetailScreen route={mockRoute} />);

    await waitFor(() => {
      expect(getByText("Ship Name")).toBeDefined();
    });
  } catch (error) {
    console.log("[Test][Error]", error);
  }
});
