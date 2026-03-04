//Bibliotecas (imports)
import {View, Text, TextInput, 
        Button, StyleSheet, Image} from 'react-native';

//Area JSX + JS (funcao principal)
export default function App(){
  const link_logo2 = 'https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-0.png';
  return(
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('./img/logo.png')}/>
      
      <Image 
        style={styles.logo2}
        source={{uri : link_logo2}}/>

      <Text style={styles.titulo}>Bem-vindos!</Text>
      <Text style={styles.subtitulo}>Insira suas credencias para acessar o sistema.</Text>

      <TextInput 
        style={styles.entrada}
        placeholder='E-mail'
        keyboardType='email-address'/>

      <TextInput 
        style={styles.entrada}
        placeholder='Senha'
        secureTextEntry={true}/>
      
      <Button 
        title='Login'
        color={'red'}/>
    </View>
  );
}

//Area de estilização
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#cccccc',
    width: '100%',
  }, titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  }, subtitulo: {
    fontSize: 20,
    color: 'cyan',
    fontStyle: 'italic',
    marginBottom: 10,
  }, entrada: {
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
  }, logo: {
    width: 150,
    height: 140,
    borderRadius: 30,
    borderWidth: 5,
    marginTop: 10,
  }, logo2: {
    width: 200,
    height: 100,
  }
})