import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Pressable
} from 'react-native'
import {
  ArrowLeft,
  User,
  Bell,
  Clock,
  Shield,
  HelpCircle,
  LogOut,
  BookOpen,
  Calendar,
  Award
} from 'lucide-react-native'
import { useRouter } from 'expo-router'

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>

        {/* Header */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          gap: 12
        }}>
          <TouchableOpacity onPress={() => router.back()} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <ArrowLeft size={22} />
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                      Profil
                    </Text>
                    </TouchableOpacity>
        </View>

       
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          marginTop: 8
        }}>
          <View style={{
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: '#0F172A',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>
              M
            </Text>
          </View>

          <View style={{ marginLeft: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>Maroon</Text>
            <Text style={{ fontSize: 13, color: '#777' }}>
              Graphic Design
            </Text>
          </View>
        </View>

        
        <View style={{
          margin: 16,
          borderWidth: 1,
          borderColor: '#3B82F6',
          borderRadius: 16,
          paddingVertical: 16,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <StatItem icon={<BookOpen size={18} />} value="10" label="Jumlah Modul" />
          <StatItem icon={<Calendar size={18} />} value="7" label="Ikut Event" />
          <Pressable onPress={() => router.push('/sertif')}>
          <StatItem icon={<Award size={18} />} value="367" label="Total Sertifikat" />
          </Pressable>
        </View>

        
        <View style={{
          marginHorizontal: 16,
          padding: 14,
          backgroundColor: '#F1F5F9',
          borderRadius: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text style={{ fontWeight: '600' }}>Mora AI</Text>
          <TouchableOpacity style={{
            backgroundColor: '#3B82F6',
            paddingHorizontal: 14,
            paddingVertical: 6,
            borderRadius: 20
          }}>
            <Text style={{ color: '#fff', fontSize: 12 }}>Chat Mora AI</Text>
          </TouchableOpacity>
        </View>

     
        <View style={{ marginTop: 24 }}>
          <MenuItem icon={<User size={20} />} label="Profil" />
          <MenuItem icon={<Bell size={20} />} label="Notifikasi" />
          <MenuItem icon={<Clock size={20} />} label="Riwayat aktivitas" />
          <MenuItem icon={<Shield size={20} />} label="Kebijakan privasi" />
          <MenuItem icon={<HelpCircle size={20} />} label="Bantuan" />
        </View>

        {/* Logout */}
        <TouchableOpacity style={{
          margin: 16,
          borderWidth: 1,
          borderColor: '#EF4444',
          borderRadius: 14,
          padding: 14,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8
        }}>
          <LogOut size={18} color="#EF4444" />
          <Text style={{ color: '#EF4444', fontWeight: '600' }}>
            Logout
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

/* ================== COMPONENT KECIL ================== */

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <View style={{ alignItems: 'center', gap: 4 }}>
      {icon}
      <Text style={{ fontWeight: '600' }}>{value}</Text>
      <Text style={{ fontSize: 11, color: '#666' }}>{label}</Text>
    </View>
  )
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 14,
      gap: 12
    }}>
      {icon}
      <Text style={{ fontSize: 14 }}>{label}</Text>
    </TouchableOpacity>
  )
}
