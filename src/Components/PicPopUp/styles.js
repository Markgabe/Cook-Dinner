import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: #fff;
	border-width: 1;
	border-radius: 15;
	align-self: center;
	margin-top: 50%;
`;

export const Content = styled.TouchableOpacity`
	padding-top: 30;
	padding-bottom: 30;
	padding-left: 20;
	padding-right: 20;
`;

export const ButtonText = styled.Text`
	font-size: 30;
	align-self: center;
	color: #555;
`;

export const ModalContainer = styled.View`
	width: 100%;
	height: 100%;
`;

export const Line = styled.View`
	width: 100%;
	height: 1;
	background-color: #555;
`;
