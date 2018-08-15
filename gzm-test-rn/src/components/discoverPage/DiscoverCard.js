import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { CardCover } from 'react-native-paper';
import { widthPercentageToDP } from '../../helpers/Responsive';
export const DiscoverCard = ({}) => {
	return (
		<TouchableOpacity>
			<CardCover
				source={{
					uri: 'https://koinbulteni.com/wp-content/uploads/peter-thiel-seasteading-nstitute.jpg'
				}}
			/>
			<Text
				style={{
					position: 'absolute',
					marginTop: widthPercentageToDP('46%'),
					marginLeft: widthPercentageToDP('7%'),
					color: 'white'
				}}
			>
				HOT BUNDLE
			</Text>
		</TouchableOpacity>
	);
};
