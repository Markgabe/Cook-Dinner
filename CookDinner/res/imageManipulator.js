import React, { Component, Image, View } from 'react';

class ImageManipulator extends Component {
   
    render() {
        return (

        	<View>
        		<Image

        			source={require('../comida.png')}

        		/>
        	</View>
            
        );
    }
}

export default ImageManipulator;
