import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Colors';

import Page from '../components/common/Page';
class ProfilePage extends Component {
	render() {
		return (
			<Page toolbarTitle="Profile">
				<ScrollView style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }} />
			</Page>
		);
	}
}
export default ProfilePage;
