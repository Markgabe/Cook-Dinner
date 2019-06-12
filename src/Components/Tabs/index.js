import React, { Component } from 'react';

import Icon from 'react-native-fa-icons';

import { Container, TabButton } from './styles';

export default function Tabs({ screen, goToScreen }) {
	return (
		<Container
			style={{
				backgroundColor: screen != 0 ? '#CCC' : '#000'
			}}
		>
			<TabButton
				onPress={() => {
					goToScreen(1);
				}}
			>
				<Icon
					name="home"
					style={{ fontSize: 45, color: screen == 1 ? '#000' : '#EEE' }}
				/>
			</TabButton>
			<TabButton
				onPress={() => {
					goToScreen(2);
				}}
			>
				<Icon
					name="bell"
					style={{ fontSize: 38, color: screen == 2 ? '#000' : '#EEE' }}
				/>
			</TabButton>
			<TabButton
				onPress={() => {
					goToScreen(3);
				}}
			>
				<Icon
					name="bars"
					style={{ fontSize: 45, color: screen == 3 ? '#000' : '#EEE' }}
				/>
			</TabButton>
		</Container>
	);
}
