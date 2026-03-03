import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft, Bell, Star } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function AkademiScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SafeAreaView>
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingTop: 20,
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <ArrowLeft size={22} />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Akademik</Text>
          </TouchableOpacity>
          <Bell size={20} />
        </View>

        {/* LIST */}
        <ScrollView style={{ paddingHorizontal: 16 }}>
          <TouchableOpacity
            onPress={() => router.push("/detailakademi")}
            activeOpacity={0.7}
            style={{ flexDirection: "row", marginBottom: 20 }}
          >
            {/* IMAGE */}
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fecaca",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                    color: "#dc2626",
                  }}
                >
                  Free
                </Text>
              </View>
            </View>

            {/* CONTENT */}
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Keuangan bisnis
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  marginBottom: 4,
                }}
              >
                Introduction of Financial Statement
              </Text>

              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                4 Module
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    marginLeft: 4,
                  }}
                >
                  4.5 (1000)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ===== CARD 2 ===== */}
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fde68a",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#a16207" }}
                >
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Investasi Usaha
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}
              >
                Introduction of Venture Capital
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                4 Module
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text style={{ fontSize: 12, color: "#6b7280", marginLeft: 4 }}>
                  4.5 (823)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ===== CARD 3 ===== */}
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fde68a",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#a16207" }}
                >
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Branding
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}
              >
                Importance of Branding
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                5 Module
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text style={{ fontSize: 12, color: "#6b7280", marginLeft: 4 }}>
                  4.5 (26783)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ===== CARD 4 ===== */}
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fde68a",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#a16207" }}
                >
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Marketinh
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}
              >
                How to Use Sales Promotion
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                5 Module
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text style={{ fontSize: 12, color: "#6b7280", marginLeft: 4 }}>
                  4.5 (351)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ===== CARD 5 ===== */}
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fde68a",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#a16207" }}
                >
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Keuangan bisnis
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}
              >
                Introduction of Financial Statement II
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                4 Module
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text style={{ fontSize: 12, color: "#6b7280", marginLeft: 4 }}>
                  4.5 (6892)
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ===== CARD 6 ===== */}
          <TouchableOpacity style={{ flexDirection: "row", marginBottom: 20 }}>
            <View
              style={{
                width: 190,
                height: 150,
                backgroundColor: "#e5e7eb",
                borderRadius: 15,
                marginRight: 16,
                position: "relative",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  backgroundColor: "#fde68a",
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#a16207" }}
                >
                  Pro
                </Text>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>
                Keuangan Pribadi
              </Text>
              <Text
                style={{ fontSize: 14, fontWeight: "600", marginBottom: 4 }}
              >
                Personal Finance Management
              </Text>
              <Text style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                4 Module
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Star size={14} color="#facc15" fill="#facc15" />
                <Text style={{ fontSize: 12, color: "#6b7280", marginLeft: 4 }}>
                  4.5 (254)
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}