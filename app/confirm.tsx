import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function ConfirmEmail() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const router = useRouter();

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('../assets/images/427ddce65ac99bbd5b9bfa58e9a4aa8169d39db7.png')} style={{ width: 155, height: 25, marginLeft: 25, marginTop: 250, marginBottom: 0 }} />
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 10,
          marginTop: 10,
        }}
      >
     
      <Text
        style={{
          fontSize: 22,
          fontWeight: '700',
          color: '#111827',
          marginBottom: 6
        }}
      >
        Cek email kamu!
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#9ca3af',
          marginBottom: 32
        }}
      >
        Masukkan kode verifikasi yang diterima di email
      </Text>

     
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 40
        }}
      >
        {code.map((item, index) => (
          <TextInput
            key={index}
            value={item}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="number-pad"
            maxLength={1}
            style={{
              width: 56,
              height: 56,
              borderWidth: 1,
              borderColor: '#d1d5db',
              borderRadius: 14,
              textAlign: 'center',
              fontSize: 20,
              color: '#111827'
            }}
          />
        ))}
      </View>

    
      <Pressable
        onPress={() => router.push('/survey')}
        style={{
          height: 52,
          borderRadius: 14,
          backgroundColor: '#0d6efd',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600'
          }}
        >
          Lanjut
        </Text>
      </Pressable>
      </View>
    </View>
  );
}