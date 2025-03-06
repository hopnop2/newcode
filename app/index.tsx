import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Login from '@/constants/Login ';  
import About from '@/components/About ';  
import { Link,useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <LinearGradient 
  colors={['#FF0000', '#FFD700', '#FFFFFF']} // สีแดงเลโก้ -> เหลืองเลโก้ -> ขาว
  style={Login.container}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
>

      <View style={Login.spacing} />
      <Image source={{ uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png' }} style={Login.logo} />
      <Text style={Login.title}>Welcome  </Text>
      <TextInput 
        style={[Login.input, ]} 
        placeholder='Username' 
      />
      <TextInput 
        style={[Login.input, ]} 
        placeholder='Password'  
      />
      <TouchableOpacity style={Login.button}>
        <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>
      
        <Link href="contact">Click Here</Link>
        <Button title='Click test' onPress={()=> 
          router.push("/contact?name=ball&major=IT")} 
        />
          <Button title='Click Params' onPress={()=> 
          router.push({
            pathname : "/contact",
            params : {
              name : "Phusin Sosud",
              major : "Information Technology",
              email : "gamertoy3366@gmail.com",
            }
          }
        )} 
        />
        <Button title='Go to User ID' onPress={()=> 
          router.push("/user/123")} 
        />
        <Button title='Go to Profile' onPress={()=> 
          router.push("/user/profile")} 
        />
          <About />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
