import { StyleSheet, ScrollView,Image,Text} from 'react-native';

export default function App() {
  return (

    <ScrollView >

        <Text style  = {styles.text}>Tesla Products</Text>
        <Image  source={{
          width:400,
          height:300,
          uri:"https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD"}}
           />  
        <Image source={{
          width:400,
          height:300,
          uri:'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70'}}
           />
            <Image source={{
          width:400,
          height:300,
          uri:"https://tesla-cdn.thron.com/delivery/public/image/tesla/538ac149-d103-4834-9d38-641d8ae447ef/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-LHD"
          
          }}
           /> 
           <Image source={{
          width:400,
          height:300,
          uri:"https://tesla-cdn.thron.com/delivery/public/image/tesla/ddc135ed-1638-40fb-8ab1-f8045059ecef/bvlatuR/std/4096x2560/Homepage-Model-X-Desktop-LHD"
         }}
           /> 

           <Image  source={{
          width:400,
          height:300,
          uri:"https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
        }}
          /> 
    

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    marginTop: 50,
    marginLeft:115,
    fontSize:24,
  },

});
