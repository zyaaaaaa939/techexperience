import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ArrowLeft, Settings, Award, ChevronRight } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MembershipScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <SafeAreaView>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: "#0f2a3d",
            paddingHorizontal: 16,
            paddingTop: 20,
            marginBottom: 15,
            paddingBottom: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <ArrowLeft size={22} color="#fff" />
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
                Membership
              </Text>
            </View>
            <Settings size={20} color="#fff" />
          </View>

          <Text style={{ color: "#cbd5e1", marginBottom: 4 }}>
            Your the best,
          </Text>
          <Text style={{ color: "#fff", fontWeight: "600" }}>
            Kamu mau membership dan bayar, orang kaya...
          </Text>
        </View>

        {/* CARD POINT */}
        <View
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 16,
            marginTop: -20,
            borderRadius: 16,
            marginBottom: 20,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            elevation: 4,
          }}
        >
          <View
            style={{
              width: 46,
              height: 46,
              borderRadius: 12,
              backgroundColor: "#fbbf24",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Award size={22} color="#fff" />
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 6,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Gold</Text>
              <Text style={{ fontWeight: "700", color: "#f59e0b" }}>
                3021 Points
              </Text>
            </View>

            <Text style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>
              Dapatkan 403 points lagi naik ke Platinum
            </Text>

            {/* PROGRESS */}
            <View
              style={{
                height: 6,
                backgroundColor: "#e5e7eb",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  width: "70%",
                  height: "100%",
                  backgroundColor: "#f59e0b",
                }}
              />
            </View>
          </View>
        </View>

        {/* INPUT */}
        <View style={{ marginHorizontal: 16, marginTop: 20 }}>
          {/* CARD */}
          <View
            style={{
              borderWidth: 1,
              borderColor: "#e5e7eb",
              borderRadius: 16,
              padding: 16,
              backgroundColor: "#ffffff",
            }}
          >
            {/* TITLE */}
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 12,
                color: "#111827",
              }}
            >
              Cara tukar points
            </Text>

            {/* ITEM 1 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#e5e7eb",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "700", color: "#111827" }}>1</Text>
              </View>

              <Text style={{ flex: 1, fontSize: 13, color: "#6b7280" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </Text>
            </View>

            {/* DIVIDER */}
            <View
              style={{
                height: 1,
                backgroundColor: "#e5e7eb",
                marginVertical: 12,
              }}
            />

            {/* ITEM 2 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#e5e7eb",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "700", color: "#111827" }}>2</Text>
              </View>

              <Text style={{ flex: 1, fontSize: 13, color: "#6b7280" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </Text>
            </View>

            {/* DIVIDER */}
            <View
              style={{
                height: 1,
                backgroundColor: "#e5e7eb",
                marginVertical: 12,
              }}
            />

            {/* ITEM 3 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#e5e7eb",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "700", color: "#111827" }}>3</Text>
              </View>

              <Text style={{ flex: 1, fontSize: 13, color: "#6b7280" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the
              </Text>
            </View>
          </View>
        </View>

        {/* FAQ */}
        <TouchableOpacity
          style={{
            backgroundColor: "#0f2a3d",
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 16,
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600" }}>FAQ</Text>
          <ChevronRight size={20} color="#fff" />
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </SafeAreaView>
    </ScrollView>
  );
}