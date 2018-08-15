import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, Text, View, Dimensions, ImageBackground } from 'react-native';
import { CardCover, Card } from 'react-native-paper';
import { widthPercentageToDP, heightPercentageToDP } from '../../helpers/Responsive';
export const DiscoverCardDataRow = ({ content1, content2, content1Image, content2Image }) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			<TouchableOpacity>
				<ImageBackground
					source={{ uri: content1Image }}
					style={{
						width: widthPercentageToDP('44%'),
						height: heightPercentageToDP('20%'),
						marginRight: widthPercentageToDP('4%'),
						marginTop: widthPercentageToDP('4%')
					}}
				>
					<Text
						style={{
							color: 'white',
							marginTop: widthPercentageToDP('27%'),
							marginLeft: widthPercentageToDP('2%')
						}}
					>
						{content1}
					</Text>
				</ImageBackground>
			</TouchableOpacity>
			<TouchableOpacity>
				<ImageBackground
					source={{ uri: content2Image }}
					style={{
						width: widthPercentageToDP('44%'),
						height: heightPercentageToDP('20%'),
						marginTop: widthPercentageToDP('4%')
					}}
				>
					<Text
						style={{
							color: 'white',
							marginTop: widthPercentageToDP('27%'),
							marginLeft: widthPercentageToDP('2%')
						}}
					>
						{content2}
					</Text>
				</ImageBackground>
			</TouchableOpacity>
		</View>
	);
};
