import * as React from 'react';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons';

export default class MyComponent extends React.Component {
	render() {
		const { toolbarTitle, children, style, toolbarActionIcon } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<Toolbar style={{ backgroundColor: 'white' }}>
					<ToolbarContent
						style={{ alignItems: 'center' }}
						titleStyle={{ color: 'black' }}
						title={toolbarTitle}
					/>
					<ToolbarAction icon={toolbarActionIcon} color="black" />
					<ToolbarAction icon="more-vert" color="black" />
				</Toolbar>

				<View style={[{ flex: 1 }, style]}>{children}</View>
			</View>
		);
	}
}
