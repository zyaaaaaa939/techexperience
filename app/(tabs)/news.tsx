import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ArrowLeft, Search, Settings, Heart } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

  
const formatLikes = (num: number) => {
  if (num >= 1000) {
    const value = (num / 1000).toFixed(1);
    return value.endsWith(".0")
      ? `${parseInt(value)}k`
      : `${value.replace(".", ",")}k`;
  }
  return num.toString();
};


function NewsCard({ image, title, author }: any) {
  return (
    <View style={{ marginRight: 12, width: 200 }}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: 120, borderRadius: 12, marginBottom: 8 }}
      />
      <Text style={{ fontWeight: "700", fontSize: 14, marginBottom: 4 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, color: "#94a3b8" }}>{author}</Text>
    </View>
  );
}

function TrendingItem({ image, category, title, date }: any) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(29000);

  const toggleLike = () => {
    setLiked(prevLiked => {
      setLikes(prev => (prevLiked ? prev - 1 : prev + 1));
      return !prevLiked;
    });
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 16,
        marginBottom: 16,
        gap: 12,
      }}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 90, height: 90, borderRadius: 12 }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, color: "#94a3b8" }}>{category}</Text>
        <Text style={{ fontWeight: "700", marginVertical: 4 }}>{title}</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "#94a3b8" }}>{date}</Text>

          <TouchableOpacity
            onPress={toggleLike}
            hitSlop={10}
            activeOpacity={0.7}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Heart
              size={16}
              color={liked ? "red" : "#94a3b8"}
              fill={liked ? "red" : "transparent"}
            />
            <Text style={{ fontSize: 12 }}>
              {formatLikes(likes)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


export default function NewsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingTop: 12,
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
          >
            <ArrowLeft size={22} />
            <Text style={{ fontSize: 20, fontWeight: "700" }}>News</Text>
          </TouchableOpacity>

          <Settings size={20} />
        </View>

        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: "#F1F5F9",
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            marginBottom: 16,
          }}
        >
          <Search size={18} color="#94a3b8" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#94a3b8"
            style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 8 }}
          />
        </View>

        {/* CATEGORY */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 16, marginBottom: 16 }}
        >
          {[
            "News",
            "Entertainment",
            "Sports",
            "Politics",
            "Fashion",
            "Economics",
          ].map((item, index) => (
            <Text
              key={index}
              style={{
                marginRight: 16,
                fontWeight: item === "Entertainment" ? "700" : "400",
                color: item === "Entertainment" ? "#000" : "#94a3b8",
              }}
            >
              {item}
            </Text>
          ))}
        </ScrollView>

       
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 16, marginBottom: 20 }}
        >
          <NewsCard
            image=".../assets/images/desain 1.avif"
            title="Arsenal meriamnya diganti"
            author="Reporter Mola"
          />
          <NewsCard
            image="assets/images/digital3.avif"
            title="Ryzen comeback, join AE"
            author="Reporter Mola"
          />
        </ScrollView>

   
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            marginLeft: 16,
            marginBottom: 12,
          }}
        >
          Trending News.
        </Text>

        <TrendingItem
          image="assets/images/desain 1.avif"
          category="Sports"
          title="Matahari turun aja, biar king MU yang bersinar"
          date="26 Januari 2026"
        />

        <TrendingItem
          image="assets/images/digital 2.jpg"
          category="Sports"
          title="Hal paling memalukan di dunia di bobol Christiano Dorgu"
          date="26 Januari 2026"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
        