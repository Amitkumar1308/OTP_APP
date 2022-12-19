import { Container,ArrowForwardIcon, NativeBaseProvider, 
  Box, 
  Image,
  Center } from 'native-base';
import React, { useEffect, useState } from 'react';
import{StyleSheet,Text,TouchableOpacity,View, ScrollView, TextInput,getPick,Button} from 'react-native';

// import { useNavigation } from '@react-navigation/native';
// import OtpInputs from 'react-native-otp-inputs';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import axios from 'axios';

const sendSMSFunction = () => {

  const [OTP, setOTP] = useState('');
  
  const generateOTP = () => {
  const characters =
    '0123456789';
  const characterCount = characters.length;
  let OTPvalue = '';
  for (let i = 0; i < 4; i++) {
    OTPvalue += characters[Math.floor(Math.random() * characterCount)];
  }
  setOTP(OTPvalue);
 
  return OTPvalue;
};
const r = OTP;
console.log(r);
 
const sendSmsOtp = async (mobileNumber, otp) => {
  const url = 'http://34.131.139.104/SMS/msg';
  let returnData;
  console.log('send sms otp', mobileNumber, otp);
  const bodyData = {
    "mobileNumber" : "916377966427",
    "otp" :  r
  };
  const response = await axios.post(url, bodyData);
  console.log('send sms response', response);
  if (response.status === 200) {
    returnData = {
      status: 'Success',
      ...response.data,
    };
  } else {
    returnData = {
      status: 'Failure',
    };
  }
}

  // return returnData;

  return (
    <NativeBaseProvider>

    <Box flex={1} bg="#fff">

    <TouchableOpacity onPress={()=>{ generateOTP()}}>
     <View style={styles.main1} >
         <Text style={styles.textbox1}>GENERATE OTP</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>{ sendSmsOtp()}}>
     <View style={styles.main1} >
         <Text style={styles.textbox1}>SMS OTP</Text>

     </View>
     
     </TouchableOpacity>
 

        {/* <OtpInputs
          style={{width: '80%', height: 200, flexDirection:'row'}}
          handleChange={(r) => console.log(r)}
          numberOfInputs={4}
          
        /> */}
  
     <OTPInputView
    style={{width: '80%', height: 200,color:'red'}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(r) => {
        console.log(`Code is ${r}, you are good to go!`)
        
    }}
/>

      
<TouchableOpacity onPress={()=>{ sendSmsOtp()}}>
     <View style={styles.main1} >
         <Text style={styles.textbox1}>Resend</Text>

     </View>
     
     </TouchableOpacity>
</Box>
</NativeBaseProvider>
);

};
export default sendSMSFunction;

//Styles CSS

export const styles = StyleSheet.create({
  normal:{
      fontFamily:'open sans',
      fontWeight:'normal',
      fontSize:20,
      color:'#eee',
      marginTop:27,
      paddingTop:15,
      marginLeft:10,
      marginRight:10,
      paddingBottom:15,
      backgroundColor:'#eee',
      width: 'auto',
      borderRadius:0
  },

  text:{
    color:'#000',
    fontWeight:'bold',
    fontSize:18,
    textAlign:'center'

  },
  main1:{
      backgroundColor:'#004aad',
      fontFamily:'open sans',
      fontWeight:'normal',
      fontSize:20,
      marginTop:27,
      paddingTop:15,
      marginLeft:10,
      marginRight:10,
      paddingBottom:15,
      width: 'auto',
      borderRadius:20
  },
  textbox1:{
      color:'#fff',
      fontWeight:'bold',
      fontSize:18,
      width:'auto',
      flexDirection: "column",
      textAlign:'center'
  },

  textbtn:{
      alignSelf: 'center',
      color:'#fff',
      fontWeight:'bold',
      fontSize:18

    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    marginLeft:50,
    color:'red'

  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
    
  },

    btn:{
      fontFamily:'open sans',
      fontSize:15,
      lineHeight:10,
      marginTop:80,
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#004aad',
      width:100,
      borderRadius:10,
      paddingLeft:0,
      marginLeft:150


    }

  });