import {StyleSheet, View} from 'react-native';
import Header from '../components/Header';

export default function () {
	return (
		<View style={styles.container}>
			<Header></Header>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	}
});