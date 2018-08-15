// import React, { Component } from 'react';
// import { ScrollView, FlatList, View, Text, TextInput } from 'react-native';
// import { Colors } from '../helpers/Colors';
// import Page from '../components/common/Page';

// import { Toolbar } from 'react-native-paper';
// const news = [
// 	{
// 		index: 0,
// 		Name: 'Milliyet'
// 	},
// 	{
// 		index: 1,
// 		Name: 'Hürriyet'
// 	},
// 	{
// 		index: 2,
// 		Name: 'Posta'
// 	},
// 	{
// 		index: 3,
// 		Name: 'Fanatik'
// 	},
// 	{
// 		index: 4,
// 		Name: 'Habertürk'
// 	}
// ];

// class SearchPage extends Component {
// 	// state = {
// 	// 	index: 0
// 	// };
// 	showResult() {
// 		for (var i = 0; news[i]; i++) {
// 			if (news.index === i) {
// 				return <Text>{news[i].Name}</Text>;
// 			}
// 			return <Text>Sonuç Bulunamadı</Text>;
// 		}
// 	}
// 	render() {
// 		return (
// 			<Page toolbarTitle="Search">
// 				<View>
// 					{/* <TextInput placeholder="Search" onKeyPress={})} />
// 					<FlatList
// 						data={news}
// 						keyExtractor={item => item.index.toString()}
// 						renderItem={({ item }) => {
// 							return <Text key={item.index}>{item.Name}</Text>;
// 						}}
// 					/> */}
// 				</View>
// 			</Page>
// 		);
// 	}
// }
// export default SearchPage;
import React from 'react';
import { Searchbar } from 'react-native-paper';

export default class SearchPage extends React.Component {
	state = {
		firstQuery: ''
	};

	render() {
		const { firstQuery } = this.state;
		return (
			<Searchbar
				placeholder="Search"
				onChangeText={a => {
					this.setState({ firstQuery: a });
				}}
				value={firstQuery}
			/>
		);
	}
}
