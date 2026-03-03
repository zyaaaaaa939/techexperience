import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Survey() {
  const [selected, setSelected] = useState("");
  const router = useRouter();

  const options = [
    "Co-Founders",
    "Instagram",
    "Tiktok",
    "Youtube",
    "Website",
    "Lainnya",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 20 }}>
        
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginBottom: 20,
            color: "#111",
          }}
        >
          Bagaimana kamu tahu tentang Techxperience?
        </Text>

        {options.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelected(item)}
            style={{
              backgroundColor: "#e5e5e5",
              padding: 16,
              borderRadius: 10,
              marginBottom: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 14 }}>{item}</Text>

            <View
              style={{
                width: 18,
                height: 18,
                borderRadius: 9,
                borderWidth: 1,
                borderColor: "#555",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {selected === item && (
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#000",
                  }}
                />
              )}
            </View>
          </Pressable>
        ))}
      </View>

     
      <View style={{ padding: 20 }}>
        <Pressable
          onPress={() => router.push('/(tabs)')}
          style={{
            backgroundColor: "#0186FF",
            padding: 16,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            Selesai
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}