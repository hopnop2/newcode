import { StatusBar } from 'expo-status-bar'; // โมดูลสำหรับจัดการสถานะบาร์บนอุปกรณ์
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  Button ,
  ScrollView,
  
} from 'react-native'; // คอมโพเนนต์พื้นฐานของ React Native
import { LinearGradient } from 'expo-linear-gradient'; // ลูกเล่นพื้นหลังสีไล่ระดับ
import Login from '@/constants/Login '; // นำเข้าสไตล์จากไฟล์คอนฟิกรูปลักษณ์
import About from '@/components/About '; // นำเข้าคอมโพเนนต์ About จากโฟลเดอร์ components
import { Link, useRouter } from 'expo-router'; // ระบบเนวิเกชันสำหรับ Expo





// คอมโพเนนต์หลักของหน้าแรก
export default function Index() {
  const router = useRouter(); // ตัวจัดการการเปลี่ยนหน้า

  return (

  <ScrollView style={{ flex: 1}}>
    <LinearGradient 
      colors={['#FF0000', '#FFD700', '#FFFFFF']} // โทนสีแดง-ทอง-ขาวแบบ LEGO
      style={Login.container}
      start={{ x: 0, y: 0 }} // จุดเริ่มต้นการไล่สี (มุมซ้ายบน)
      end={{ x: 1, y: 1 }} // จุดสิ้นสุดการไล่สี (มุมขวาล่าง)
    >
      {/* ส่วนหัวหน้าเว็บ */}
      <View style={Login.spacing} /> {/* ระยะห่างเว้นวรรคด้านบน */}
      
      {/* โลโก้ LEGO */}
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png' }} 
        style={Login.logo} 
      />

      {/* ข้อความต้อนรับ */}
      <Text style={Login.title}>Welcome</Text>

      {/* ฟอร์มล็อกอิน */}
      <TextInput 
        style={[Login.input]} 
        placeholder='Username' // ช่องกรอกชื่อผู้ใช้
      />
      <TextInput 
        style={[Login.input]} 
        placeholder='Password' // ช่องกรอกรหัสผ่าน
        secureTextEntry // ซ่อนอักขระรหัสผ่าน
      />

      {/* ปุ่มล็อกอินแบบ Custom */}
      <TouchableOpacity style={Login.button}>
        <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* ระบบนำทางต่างๆ */}
      <Link href="contact">Click Here</Link> {/* ลิงก์ไปหน้าอื่นแบบพื้นฐาน */}
      
      {/* ปุ่มทดสอบการส่งพารามิเตอร์ 3 แบบ */}
      <Button 
        title='Click test' 
        onPress={() => router.push("/contact?name=ball&major=IT")} // แบบ Query String
      />
      
      <Button 
        title='Click Params' 
        onPress={() => router.push({ // แบบ Object Parameters
          pathname: "/contact",
          params: { 
            name: "Phusin Sosud",
            major: "Information Technology",
            email: "gamertoy3366@gmail.com",
          }
        })} 
      />
      
      <Button 
        title='Go to User ID' 
        onPress={() => router.push("/user/123")} // แบบ Dynamic Route
      />
      
      <Button 
        title='Go to Profile' 
        onPress={() => router.push("/user/profile")} // แบบ Nested Route
      />

      <About /> {/* แสดงคอมโพเนนต์ About */}
      <StatusBar style="auto" /> {/* ตั้งค่าสถานะบาร์อัตโนมัติ */}
    </LinearGradient>
  </ScrollView>


  );
}
