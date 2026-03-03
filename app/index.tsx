import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function index() {
const router = useRouter();

  return (
    <View>
      <View>
        <Image source={require('../assets/images/427ddce65ac99bbd5b9bfa58e9a4aa8169d39db7.png')} style={{ width: 250, height: 50, marginLeft: 66, marginTop: 250 }} />
      </View>

     <View style={{justifyContent:'center', alignItems:'center', marginTop:40, marginLeft:20, marginRight:20}}>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', marginTop:20}}>Belajar Technologi</Text>
            <Text style={{fontSize:25, fontWeight:'bold', textAlign:'center', marginTop:0}}>& Dapatkan Pengalamannya</Text>
            <Text style={{fontSize:16, textAlign:'center', marginTop:10, marginLeft:20, marginRight:20}}>Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.</Text>
        </View>
        
       <View style={{ display: "flex" }}>
                      <TouchableOpacity
                      onPress={() => router.push('/register')}
                        style={{
                          backgroundColor: "#2EECAE",
                          padding: 15,
                          borderRadius: 12,
                          marginHorizontal: 16,
                          marginTop: 100,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          Mulai Belajar Sekarang
                        </Text>
                        </TouchableOpacity>
                    </View>

         <View style={{ display: "flex" }}>
                      <TouchableOpacity
                      onPress={() => router.push('/login')}
                        style={{
                          backgroundColor: "#0186FF",
                          padding: 15,
                          borderRadius: 12,
                          marginHorizontal: 16,
                          marginTop: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          Masuk
                        </Text>
                        </TouchableOpacity>
                    </View>


         <View style={{justifyContent:'center', alignItems:'center', marginTop:0, marginLeft:20, marginRight:20}}>
          <Text style={{fontSize:14, textAlign:'center', marginTop:10, marginLeft:20, marginRight:20}}>#Dari 1 Baris pertama sampai project Pertama</Text>
        </View>

    </View>
  ) 
}