import styled from 'styled-components/native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const Container = styled.View`
	width: ${wp(100)};
	height: 100%;
`;

export const ConfigText = styled.Text`
	align-self: center;
	margin-left: 10;
	font-size: 20;
`;

export const ConfigCard = styled.View`
	width: 100%;
	height: 80px;
	align-items: center;
	flex-direction: row;
	border-bottom-width: 1px;
`;

export const LogOutButton = styled.TouchableOpacity`
	color: #ddd;
	border-radius: 15;
	border-color: red;
	border-width: 1;
	align-items: center;
	justify-content: center;
	margin-top: auto;
	width: 95%;
	height: 50;
	align-self: center;
	margin-bottom: 5;
`;

export const LogOutText = styled.Text`
	color: red;
	font-size: 20;
`;

export const AvatarImage = styled.Image`
	width: 150;
	height: 150;
	border-radius: 75;
`;

export const AvatarContainer = styled.View`
	margin-top: 30;
	margin-bottom: 50;
`;

export const ChooseFileButton = styled.TouchableOpacity``;
