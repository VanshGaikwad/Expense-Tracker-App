import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typo from '@/components/Typo'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'

const Login = () => {
  return (
   <ScreenWrapper>
     <View style={styles.container}>
        <BackButton></BackButton>
     </View>
   </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:spacingY._30,
        paddingHorizontal:spacingX._20,

    },

    welcomeText:{
        fontSize:verticalScale(20),
        fontWeight:"bold",
        color:colors.text,

    },
    form:{
        gap:spacingY._20,

    },
    forgotPassword:{
        textAlign:"right",
        fontWeight:"500",
        color:colors.text,
    },
    footer:{
        textAlign:"center",
        color:colors.text,
        fontSize: verticalScale(15),


    },

});