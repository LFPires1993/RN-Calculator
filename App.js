import { SafeAreaView } from 'react-native';
import styles from './src/styles';
import Keyboard from './src/components/Keyboard';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Keyboard/>
    </SafeAreaView>
  );
}
