import { Button, StyleSheet } from 'react-native';

export default class Button extends React.Component {
  render() {
    return (
      <View style={styles.buttonText}>
        <Button
          title="Stand Up!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#ff9500',
  }
});
