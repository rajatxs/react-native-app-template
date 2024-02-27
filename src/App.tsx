import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export function App(): React.JSX.Element {
	return (
		<SafeAreaView style={styles.root}>
			<Text style={{ color: 'black' }}>Welcome to OneApp</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
