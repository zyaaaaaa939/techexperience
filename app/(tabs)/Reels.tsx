import { View, Text, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, MessageCircle, Send, Bookmark, Search } from 'lucide-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Explore() {
   const [liked, setLiked] = React.useState(false);
  const [count, setCount] = React.useState(1800);

  const Tambah = () => {
    setCount(prev => (liked ? prev - 1 : prev + 1));
    setLiked(prev => !prev);
      };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#ffffff' }}
      edges={['top']}
    >
      <View style={{ flex: 1 }}>


        <Image
          source={require('@/assets/images/pexels-ollivves-931007.jpg')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />


        <View
          style={{
            position: 'absolute', top: 12, left: 16, right: 16, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 12,  paddingHorizontal: 12, paddingVertical: 2, flexDirection: 'row', alignItems: 'center',
          }}
        >
          <Search size={18} color="#6B7280" />
          <TextInput
            placeholder="For Your Page" 
            placeholderTextColor="#6B7280"
            style={{ marginLeft: 8, flex: 1, color: '#111827' }}/>
        </View>


        <View
          style={{
            position: 'absolute', right: 16, bottom: 120, alignItems: 'center',
          }}
        >
          <Pressable
          style={{ alignItems: 'center', marginBottom: 20 }}
          onPress={Tambah}
        >
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={26}
            color={liked ? 'red' : 'white'}
          />
          <Text style={{ color: 'white' }}>{count}</Text>
        </Pressable>
          <MessageCircle size={30} color="#fff" style={{ marginBottom: 20 }} />
          <Send size={30} color="#fff" style={{ marginBottom: 20 }} />
          <Bookmark size={30} color="#fff" />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 24,
            left: 16,
            right: 90,
          }}
        >
          <Text style={{ color: '#fff', fontWeight: '700' }}>
            Kamu akan mendapatkan:
          </Text>
          <Text style={{ color: '#E5E7EB' }}>
            Mendapatkan sertifikat dan keuntungan lainnya
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}