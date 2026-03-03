import { useRouter } from 'expo-router'
import {
  ArrowLeft,
  Award,
  CheckCircle,
  Lock
} from 'lucide-react-native'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

interface CertificateCardProps {
  title: string
  unlocked?: boolean
  locked?: boolean
  color?: string
}

export default function SertifikatScreen() {
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
            Sertifikat
          </Text>
          </TouchableOpacity>
        </View>

        {/* Grid Sertifikat */}
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 16,
          justifyContent: 'space-between'
        }}>

          <CertificateCard title="Dasar Jaringan" color="#4F7FFF" unlocked />
          <CertificateCard title="Master Jaringan" locked />

          <CertificateCard title="Dasar MySql" color="#22C55E" unlocked />
          <CertificateCard title="Dasar Frontend" color="#EF4444" unlocked />

          <CertificateCard title="Master MySql" locked />
          <CertificateCard title="Dasar Design" locked />

          <CertificateCard title="Master Jaringan" color="#F59E0B" unlocked />
          <CertificateCard title="Master AI" color="#34D399" unlocked />

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

/* ================= CARD COMPONENT ================= */

function CertificateCard({ title, unlocked = false, locked = false, color = '#9CA3AF' }: CertificateCardProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={{
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        marginBottom: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB'
      }}
    >

      {/* Status */}
      {unlocked && (
        <View style={{ position: 'absolute', top: 10, right: 10 }}>
          <CheckCircle size={18} color="#22C55E" />
        </View>
      )}

      {/* Icon */}
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: unlocked ? color : '#BDBDBD',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {locked ? (
          <Lock size={26} color="#9CA3AF" />
        ) : (
          <Award size={28} color={color} />
        )}
      </View>

      {/* Title */}
      <Text style={{
        marginTop: 12,
        fontSize: 13,
        fontWeight: '500',
        textAlign: 'center'
      }}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}
