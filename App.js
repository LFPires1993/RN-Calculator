import { SafeAreaView } from 'react-native';
import styles from './src/styles';
import Keyboard from './src/components/Keyboard';
import Display from './src/components/Display';

export default function App() {
  state = {
    displayNumber: '0'
  }
  return (
    <SafeAreaView style={styles.app}>
      <Display value={this.state.displayNumber}/>
      <Keyboard/>
    </SafeAreaView>
  );
}
