import { Image, StyleSheet, Text, View } from "react-native";
// import NasaLogo from '../../assets/nasa-logo.png';

export default function () {
	return (
		<View style={styles.container}>
			<View style={styles.containerTitle}>
				<Text style={styles.title}>Explore</Text>
			</View>
			<View style={styles.containerImage}>
				<Image source={require('../../assets/nasa-logo.png')} style={styles.image} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	containerTitle: {
		flex: 1
	},
	title: {
		color: '#ffffff',
		fontWeight: 'bold'
	},
	containerImage: {
		flex: 1,
		alignItems: 'flex-end',
	},
	image: {
		width: 60,
		height: 60
	},
});