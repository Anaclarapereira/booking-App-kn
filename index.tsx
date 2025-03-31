import { Usuarios } from '@/constants/usuario';
import { Image, StyleSheet, Platform, Text, FlatList, View } from 'react-native';


export default function HomeScreen() {
  <View>
    <Text>hguhjghuy</Text>
    <View style={{margin: 10, flexDirection: 'row'}}>
        <Text style={{width: '33%'}}>#ID</Text>
        <Text style={{width: '33%'}}>Nome</Text>
        <Text style={{width: '33%'}}>Nome grupo</Text>
     </View>
  <FlatList
        data={Usuarios()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{margin: 1,
            flexDirection: 'row',
            backgroundColor:'black',
            paddingLeft: 5,
            paddingRight: 5}}
           >   
            <Text style={{width: '33%', color: 'black'}}>{item.id}</Text>
            <Text style={{width: '33%', color: 'black'}}>{item.nome}</Text>
            <Text style={{width: '33%', color: 'black'}}>{item.nome_grupo}</Text>
          </View>
        )}
      />
   </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});