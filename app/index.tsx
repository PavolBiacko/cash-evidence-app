import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Main Page</Text>
      <StatusBar style="inverted" />
      <Link href="/home" style={{ color: "blue" }}>Go To Home</Link>
    </View >
  );
}