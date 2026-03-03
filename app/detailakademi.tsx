import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { ArrowLeft, Bell, Play, CheckCircle2, FileText, HelpCircle } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function detailakademi() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <SafeAreaView style={{ flex: 1 }}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 12,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <ArrowLeft size={24} color="#000" />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Back</Text>
          </TouchableOpacity>
          <Bell size={24} color="#000" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* VIDEO PLAYER PLACEHOLDER */}
          <View
            style={{
              width: "100%",
              height: 230,
              backgroundColor: "#E5E7EB",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Play size={48} color="#000" fill="#000" />
          </View>

          {/* COURSE INFO */}
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#0F172A" }}>
              Introduction of Financial Statement
            </Text>
            <Text style={{ fontSize: 14, color: "#64748B", marginTop: 8, lineHeight: 20 }}>
              Bergabung dengan kelar mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami itu.
            </Text>

            <View style={{ flexDirection: "row", marginTop: 16, gap: 16 }}>
              <Text style={{ color: "#EAB308", fontWeight: "600" }}>★ 4.5 (823)</Text>
              <Text style={{ color: "#94A3B8" }}>4 Module</Text>
              <Text style={{ color: "#94A3B8" }}>Programmer</Text>
            </View>
          </View>

          {/* CURRICULUM SECTION */}
          <View
            style={{
              margin: 16,
              borderRadius: 16,
              backgroundColor: "#ffffff",
              borderWidth: 1,
              borderColor: "#F1F5F9",
              // Shadow untuk iOS & Android
              elevation: 4,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 10,
            }}
          >
            {/* Module Header */}
            <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#F1F5F9", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={{ fontSize: 12, fontWeight: "700", color: "#1E293B" }}>Module 1</Text>
                <Text style={{ fontSize: 16, fontWeight: "700", color: "#1E293B" }}>Fundamentals for financial</Text>
                <Text style={{ fontSize: 12, color: "#94A3B8" }}>30 minutes</Text>
              </View>
              <CheckCircle2 size={24} color="#CBD5E1" />
            </View>

            {/* Lessons List */}
            <LessonItem title="Lesson 1 - Identifying the Need: Market Research Essentials" type="Video" icon={<Play size={18} color="#94A3B8" />} />
            <LessonItem title="Lesson 2 - Building a Solid Business Model Canvas" type="Video" icon={<Play size={18} color="#94A3B8" />} />
            <LessonItem title="Lesson 3" type="Attachment" icon={<FileText size={18} color="#94A3B8" />} />
            <LessonItem title="Lesson 4" type="Quiz" icon={<HelpCircle size={18} color="#94A3B8" />} isLast />
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>

        {/* BOTTOM ACTION BUTTON */}
        <View style={{ padding: 16, position: "absolute", bottom: 0, width: "100%", backgroundColor: "#fff" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#0F172A",
              paddingVertical: 16,
              paddingHorizontal: 20,
              borderRadius: 12,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Ikuti Kelas</Text>
            <ArrowLeft size={20} color="#fff" style={{ transform: [{ rotate: "180deg" }] }} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

// Sub-komponen untuk list lesson biar rapi kayak CourseCard lu
function LessonItem({ title, type, icon, isLast }: any) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 16,
        alignItems: "center",
        borderBottomWidth: isLast ? 0 : 1,
        borderBottomColor: "#F1F5F9",
      }}
    >
      <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#F1F5F9", justifyContent: "center", alignItems: "center", marginRight: 12 }}>
        {icon}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#1E293B" }}>{title}</Text>
        <Text style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
}