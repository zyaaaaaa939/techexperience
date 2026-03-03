import {
  Bell,
  BotMessageSquare,
  CircleChevronRight,
  CircleUser,
  LibraryBig,
  Search,
  Tickets,
  Users
} from 'lucide-react-native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ===== Header ===== */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12
        }}>
          <Image
            source={require('../../assets/images/427ddce65ac99bbd5b9bfa58e9a4aa8169d39db7.png')}
            style={{ width: 150, height: 30, resizeMode: 'contain' }}
          />

          <View style={{ flexDirection: 'row', gap: 16 }}>
            <TouchableOpacity><Bell size={22} /></TouchableOpacity>
            <TouchableOpacity><Search size={22} /></TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/user')}><CircleUser size={24} /></TouchableOpacity>
          </View>
        </View>  

        {/* ===== Banner ===== */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 16, paddingHorizontal: 16, marginVertical: 16 }}>
            <Image
              source={require('../../assets/images/digital 1.jpg')}
              style={{ width: 360, height: 220, borderRadius: 16 }}
            />
            <Image
              source={require('../../assets/images/digital 2.jpg')}
              style={{ width: 360, height: 220, borderRadius: 16 }}
            />
            <Image
              source={require('../../assets/images/digital3.avif')}
              style={{ width: 360, height: 220, borderRadius: 16 }}
            />
          </View>
        </ScrollView>

        {/* ===== Menu ===== */}
        <View style={{
          paddingHorizontal: 16,
          marginTop: 8,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <MenuCard icon={<LibraryBig size={20} />} title="Modul Akademi" />
          <MenuCard icon={<Users size={20} />} title="Community" />
          <MenuCard icon={<Tickets size={20} />} title="Event Hackton" />
          <MenuCard icon={<BotMessageSquare size={20} />} title="Chat CS" />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 32,
          marginHorizontal: 16,
          marginBottom: 16
        }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
            Mau belajar apa ni
          </Text>
          <CircleChevronRight size={20} color="#000" />
        </View>

        {/* ===== Course Grid ===== */}
        <View style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 32
        }}>
          <CourseCard
            image={require('../../assets/images/desain 1.avif')}
            title="Dasar Belajar Design"
            subtitle="Belajar design dari dasar"
          />
          <CourseCard
            image={require('../../assets/images/digital 2.jpg')}
            title="Dasar Belajar MySql"
            subtitle="Belajar database dasar dulu"
          />
          <CourseCard
            image={require('../../assets/images/digital3.avif')}
            title="Dasar Belajar Jaringan"
            subtitle="Belajar jaringan bersama Pak Erin"
          />
          <CourseCard
            image={require('../../assets/images/digital 1.jpg')}
            title="Mahir menjadi frontend"
            subtitle="Mau jadi FE belajar disini dulu"
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 32,
          marginHorizontal: 16,
          marginBottom: 16
        }}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
            Ikuti Event Terdekat
          </Text>
          <CircleChevronRight size={20} color="#000" />
        </View>

         <ScrollView horizontal showsHorizontalScrollIndicator={false} >
   <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:1, gap:10}}>
      <TouchableOpacity style={{backgroundColor:'white', borderColor:'#d3d3d3', borderWidth: 1, paddingVertical:8, paddingHorizontal:16, borderRadius:10}}>
        <Text style={{color:'#000000', fontWeight:'bold'}}>Hackton</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'white', borderColor:'#d3d3d3', borderWidth: 1, paddingVertical:8, paddingHorizontal:16, borderRadius:10}}>
        <Text style={{color:'#000000', fontWeight:'bold'}}>Design Web</Text>
      </TouchableOpacity>
       <TouchableOpacity style={{backgroundColor:'white', borderColor:'#d3d3d3', borderWidth: 1, paddingVertical:8, paddingHorizontal:16, borderRadius:10}}>
        <Text style={{color:'#000000', fontWeight:'bold'}}>Workshop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white', borderColor:'#d3d3d3', borderWidth: 1, paddingVertical:8, paddingHorizontal:16, borderRadius:10 }}>
        <Text style={{color:'#000000', fontWeight:'bold'}}>Relax</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'white', borderColor:'#d3d3d3', borderWidth: 1, paddingVertical:8, paddingHorizontal:16, borderRadius:10,}}>
        <Text style={{color:'#000000', fontWeight:'bold'}}>Energize</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 16, paddingHorizontal: 16, marginVertical: 16 }}>
            <Image
              source={require('../../assets/images/digital 1.jpg')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
            <Image
              source={require('../../assets/images/digital 2.jpg')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
            <Image
              source={require('../../assets/images/digital3.avif')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 16, marginVertical: 0 }}>
            <Image
              source={require('../../assets/images/desain 1.avif')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
            <Image
               source={require('../../assets/images/digital 1.jpg')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
            <Image
              source={require('../../assets/images/digital3.avif')}
              style={{ width: 344, height: 150, borderRadius: 16 }}
            />
          </View>
        </ScrollView>

    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 32,
      marginHorizontal: 16,
      marginBottom: 16
    }}>
      <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
        Program Unggulan
      </Text>
      <CircleChevronRight size={20} color="#000" />
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, paddingHorizontal: 16 }}>
        <ProgramCard
          image={require('../../assets/images/1.png')}
          title="Techxperience Career"
        />

        <ProgramCard
          image={require('../../assets/images/2.png')}
          title="Pengembangan Usaha"
        />

        <ProgramCard
          image={require('../../assets/images/3.png')}
          title="Beasiswa Kuliah"
        />

        <ProgramCard
          image={require('../../assets/images/4.png')}
          title="Techxperience Roadmap"
        />
      </View>
    </ScrollView>
  </ScrollView>

</SafeAreaView>
  )
}


function MenuCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <TouchableOpacity style={{
      width: '48%',
      backgroundColor: '#F1F3F5',
      borderRadius: 18,
      paddingVertical: 14,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderLeftWidth: 5,
      borderLeftColor: '#3B82F6'
    }}>
      {icon}
      <Text
        numberOfLines={1}
        style={{
          fontSize: 13,
          fontWeight: '400',
          color: '#333',
          flex: 1
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>

        

  )
}

function CourseCard({ image, title, subtitle }: { image: any; title: string; subtitle: string }) {
  return (
    <View style={{
      width: '47%',
      backgroundColor: '#F1F3F5',
      borderRadius: 16,
      overflow: 'hidden'
    }}>
      <Image source={image} style={{ width: '100%', height: 110 }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: '500' }}>
          {title}
        </Text>
        <Text style={{ fontSize: 12, color: '#555', marginTop: 4 }}>
          {subtitle}
        </Text>
      </View>
    </View>
  )
}

function ProgramCard({ image, title }: { image: any; title: string }) {
  return (
    <TouchableOpacity style={{
      width: 140,
      height: 140,
      backgroundColor: '#EEF2F6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
      borderRightWidth: 6,
      borderRightColor: '#1D9BF0'
    }}>

      <Image
        source={image}
        style={{
          width: 64,
          height: 64,
          marginBottom: 12,
          resizeMode: 'contain'
        }}
      />

      <Text
        style={{
          fontSize: 13,
          color: '#333',
          textAlign: 'center'
        }}
      >
        {title}
      </Text>

    </TouchableOpacity>
  )
}


  