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
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  // ===== VALIDATION =====
  const isGmail = email.endsWith("@gmail.com");
  const isPasswordValid = password.length >= 8;
  const isFormValid = isGmail && isPasswordValid;

  const handleLogin = () => {
    if (!isFormValid) return;
    router.push("/(tabs)");
  };

  const handleNotAvailable = () => {
    Alert.alert("Info", "Fitur ini belum tersedia");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 20, marginTop: 160 }}>
        {/* LOGO */}
        <Image
          source={require("@/assets/images/427ddce65ac99bbd5b9bfa58e9a4aa8169d39db7.png")}
          style={{ width: 200, height: 50, marginBottom: 24 }}
        />

        {/* EMAIL */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Masukkan Email (@gmail.com)"
          placeholderTextColor="#999"
          autoCapitalize="none"
          style={{
            height: 52,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            paddingHorizontal: 16,
            backgroundColor: "#fff",
            marginBottom: 6,
          }}
        />

        {email.length > 0 && !isGmail && (
          <Text style={{ color: "red", fontSize: 13, marginBottom: 8 }}>
            Email harus menggunakan @gmail.com
          </Text>
        )}

        {/* PASSWORD */}
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Masukkan Password (Minimal 8 Karakter)"
          placeholderTextColor="#999"
          secureTextEntry
          style={{
            height: 52,
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            paddingHorizontal: 16,
            backgroundColor: "#f9fafb",
          }}
        />

        {password.length > 0 && !isPasswordValid && (
          <Text style={{ color: "red", fontSize: 13, marginTop: 6 }}>
            Password minimal 8 karakter
          </Text>
        )}

        {/* REMEMBER & FORGOT */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Pressable
            onPress={() => setRemember(!remember)}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: remember ? "#2563eb" : "#ccc",
                backgroundColor: remember ? "#2563eb" : "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {remember && (
                <Text style={{ color: "#fff", fontWeight: "bold" }}>✓</Text>
              )}
            </View>
            <Text style={{ fontSize: 14, color: "#6b7280" }}>
              Ingat aku
            </Text>
          </Pressable>

          <Pressable>
            <Text style={{ color: "#2563eb" }}>Lupa Password?</Text>
          </Pressable>
        </View>

        {/* LOGIN BUTTON */}
        <TouchableOpacity
          disabled={!isFormValid}
          onPress={handleLogin}
          style={{
            backgroundColor: isFormValid ? "#0186FF" : "#d1d5db",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: 24,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: isFormValid ? "#000" : "#6b7280",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        {/* REGISTER */}
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 12 }}>
          <Text>Belum punya akun? </Text>
          <Pressable onPress={() => router.push("/register")}>
            <Text style={{ color: "#2563eb", fontWeight: "bold" }}>
              Daftar dulu!
            </Text>
          </Pressable>
        </View>

        {/* DIVIDER */}
        <Text
          style={{
            textAlign: "center",
            marginVertical: 24,
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
            padding: 14,
            borderRadius: 14,
            marginBottom: 12,
          }}
        >
          <Image
            source={require("@/assets/images/Google.png")}
            style={{ width: 22, height: 22, marginRight: 10 }}
          />
          <Text>Masuk dengan Google</Text>
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
            padding: 14,
            borderRadius: 14,
          }}
        >
          <Image
            source={require("@/assets/images/Facebook_logo_(square).png")}
            style={{ width: 22, height: 22, marginRight: 10 }}
          />
          <Text>Masuk dengan Facebook</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}