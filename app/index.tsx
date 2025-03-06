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
      colors={['#000000', '#6a1b9a','#6a1b9a',]} 
      style={Login.container}
    >
      <View style={Login.spacing} />
      <Image source={{ uri:'https://img.icons8.com/?size=512&id=gKHNPSTv94S9&format=png' }} style={Login.logo} />
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
          router.push("/contact?name=Mill&major=IT")} 
        />
          <Button title='Click Params' onPress={()=> 
          router.push({
            pathname : "/contact",
            params : {
              name : "Mill",
              major : "IT",
              email : "pilan.mill@gmail.com",
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
