import styled from 'styled-components/native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
export const Container = styled.View`
	width: ${wp(100)};
	height: 100%;
`;
