import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: #ccc;
`;

export const Bar = styled.View`
	background-color: gray;
	flex-direction: row;
	align-items: center;
	height: 60;
`;

export const BackButton = styled.TouchableNativeFeedback`
	height: 100%;
	align-self: flex-start;
	align-items: center;
`;

export const SendButton = styled.TouchableNativeFeedback`
	height: 100%;
	align-self: flex-end;
	align-items: center;
`;

export const TitleInput = styled.TextInput`
	background-color: #fff;
	margin-top: 10;
	font-size: 20;
	text-align: center;
	border-color: gray;
	border-width: 2;
	border-radius: 10;
	width: 45%;
	height: 40;
	margin-horizontal: 10;
`;

export const DescriptionInput = styled.TextInput`
	background-color: #fff;
	margin-top: 10;
	font-size: 20;
	text-align: center;
	border-color: gray;
	border-width: 2;
	border-radius: 10;
	width: 100%;
	height: 100%;
`;

export const ImageInput = styled.TouchableNativeFeedback`
	align-self: center;
`;

export const Header = styled.View`
	flex: 0.3;
	flex-direction: row;
	background-color: #ccc;
`;

export const RecipeImage = styled.Image`
	width: 150;
	height: 150;
	border-radius: 75;
	align-self: center;
	margin-left: 15;
`;

export const DescriptionBox = styled.View`
	flex: 0.7;
	background-color: #fff;
`;
