import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // ===== VALIDATION =====
  const isEmailValid = email.endsWith("@gmail.com");

  const handleSubmit = () => {
    if (!isEmailValid) return;
    router.push("/survey");
  };

  const handleNotAvailable = () => {
    Alert.alert("Info", "Fitur ini belum tersedia");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 20, marginTop: 180 }}>
        {/* LOGO */}
        <Image
          source={require("@/assets/images/427ddce65ac99bbd5b9bfa58e9a4aa8169d39db7.png")}
          style={{ width: 200, height: 50, marginBottom: 28 }}
        />

        {/* EMAIL INPUT */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Masukkan Email (@gmail.com)"
          placeholderTextColor="#9ca3af"
          autoCapitalize="none"
          style={{
            height: 52,
            borderWidth: 1,
            borderColor: isEmailValid ? "#0186FF" : "#e5e7eb",
            borderRadius: 14,
            paddingHorizontal: 16,
            backgroundColor: "#fff",
            marginBottom: 6,
          }}
        />

        {email.length > 0 && !isEmailValid && (
          <Text style={{ color: "red", fontSize: 13, marginBottom: 12 }}>
            Email harus menggunakan @gmail.com
          </Text>
        )}

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
          disabled={!isEmailValid}
          onPress={handleSubmit}
          style={{
            backgroundColor: isEmailValid ? "#0186FF" : "#d1d5db",
            paddingVertical: 14,
            borderRadius: 14,
            marginTop: 16,
            opacity: isEmailValid ? 1 : 0.8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: isEmailValid ? "#000" : "#6b7280",
            }}
          >
            Lanjutkan
          </Text>
        </TouchableOpacity>

        {/* DIVIDER */}
        <Text
          style={{
            textAlign: "center",
            marginVertical: 28,
            color: "#9ca3af",
          }}
        >
          Atau masuk melalui
        </Text>

        {/* GOOGLE */}
        <Pressable
          onPress={handleNotAvailable}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#e5e7eb",
            paddingVertical: 14,
            borderRadius: 16,
            marginBottom: 12,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("@/assets/images/Google.png")}
            style={{ width: 22, height: 22, marginRight: 10 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 15, color: "#374151" }}>
            Masuk dengan Google
          </Text>
        </Pressable>

        {/* FACEBOOK */}
        <Pressable
          onPress={handleNotAvailable}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#e5e7eb",
            paddingVertical: 14,
            borderRadius: 16,
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("@/assets/images/Facebook_logo_(square).png")}
            style={{ width: 22, height: 22, marginRight: 10 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 15, color: "#374151" }}>
            Masuk dengan Facebook
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
