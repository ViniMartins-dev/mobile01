import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.pageTitle}>Cargos de TI</Text>

      <ScrollView>

        <View style={styles.card}>

          <Text style={styles.titulo}>Programador Junior</Text>

          <Text style={styles.texto}>O programador júnior está no início da carreira e tem conhecimentos básicos de programação. Ele trabalha sob supervisão, realizando tarefas simples e aprendendo a aplicar os conceitos em projetos reais. Sua função inclui seguir instruções de desenvolvedores mais experientes, corrigir bugs, implementar funcionalidades simples e aprender a usar as ferramentas e linguagens necessárias no dia a dia da empresa.</Text>

          <Image style={styles.imagem} source={require('./assets/programador-junior.png')} />

        </View>

        <View style={styles.card}>

          <Text style={styles.titulo}>Programador Pleno</Text>

          <Text style={styles.texto}>O programador pleno já tem experiência suficiente para trabalhar de forma mais autônoma. Ele consegue lidar com tarefas mais complexas, tomar decisões sobre a arquitetura do código e resolver problemas técnicos com maior eficiência. Embora ainda possa contar com o auxílio de desenvolvedores seniores em questões mais difíceis, ele tem mais responsabilidade e contribui de maneira significativa para o desenvolvimento de projetos.</Text>

          <Image style={styles.imagem} source={require('./assets/programador-pleno.jpg')} />

        </View>


        <View style={styles.card}>

          <Text style={styles.titulo}>Programador Senior</Text>

          <Text style={styles.texto}> O programador sênior é um profissional altamente experiente e especializado. Ele é responsável por liderar projetos, tomar decisões estratégicas sobre a arquitetura do sistema e orientar os outros membros da equipe. Além de desenvolver código complexo, o sênior também pode ser responsável por revisar o trabalho dos desenvolvedores mais jovens, promover boas práticas de programação e ajudar a resolver problemas críticos que exigem soluções avançadas.</Text>

          <Image style={styles.imagem} source={require('./assets/programador-senior.jpeg')} />

        </View>


      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    padding: 10,
    width: 'fit-content',
    border: '1px black solid'
  },

  titulo: {
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  texto: {
    padding: 5,
    fontStyle: 'italic'
  },

  imagem: {
    width: '100%',
    objectFit: 'fill',
    height: 300,
    padding: 10,
    borderRadius: 10
  },

  pageTitle: {

  }
});
