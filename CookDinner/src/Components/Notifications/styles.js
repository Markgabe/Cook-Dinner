import styled from 'styled-components/native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
export const Container = styled.View`
	font-size: 30;
	font-weight: bold;
	width: ${wp(100)};
	height: 100%;
	align-items: center;
`;
