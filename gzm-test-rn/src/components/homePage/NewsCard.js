import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Colors } from '../.././helpers/Colors';
import { Divider } from '.././common/Divider';
import Feather from 'react-native-vector-icons/Feather';
import { widthPercentageToDP } from '../.././helpers/Responsive';
import { FontSizeDict } from '../.././helpers/Constants';
import { Card, CardContent, Title, Paragraph, CardCover, CardActions, Button } from 'react-native-paper';

class NewsCard extends Component {
	render() {
		const { newsTitle, newsTime, newsContent, newsImage, newsURL } = this.props;
		return (
			<View style={styles.container}>
				<Card>
					<View style={styles.head}>
						<Text style={styles.headContent}>{newsContent}</Text>
						<Text style={styles.headContent}>{newsTime}</Text>
					</View>
					<Divider style={styles.divider} />
					<TouchableOpacity onPress={() => Linking.openURL(newsURL)}>
						<CardContent style={styles.newsTitle}>
							<Title>{newsTitle}</Title>
						</CardContent>
						<CardCover source={{ uri: newsImage }} />
					</TouchableOpacity>
					<CardActions style={{ flexDirection: 'row-reverse' }}>
						<Feather
							name="download"
							size={widthPercentageToDP('6%')}
							color={Colors.BasicColor}
							style={styles.icons}
						/>
						<Feather
							name="bookmark"
							size={widthPercentageToDP('6%')}
							color={Colors.BasicColor}
							style={styles.icons}
						/>
					</CardActions>
				</Card>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.AppBackgroundColor,
		flex: 1
	},
	head: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: widthPercentageToDP('3%')
	},
	headContent: {
		fontSize: FontSizeDict.font10,
		color: Colors.BasicColor
	},
	divider: {
		backgroundColor: Colors.BasicColor,
		height: 0.5
	},
	newsTitle: {
		paddingBottom: widthPercentageToDP('3%')
	},
	icons: {
		paddingRight: widthPercentageToDP('5%')
	}
});
export default NewsCard;
