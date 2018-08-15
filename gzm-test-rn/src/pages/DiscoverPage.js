import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../helpers/Colors';

import Page from '../components/common/Page';
import { CardContent, CardCover, Card } from 'react-native-paper';
import { widthPercentageToDP } from '../helpers/Responsive';
import { DiscoverCard } from '../components/discoverPage/DiscoverCard';
import { DiscoverCardDataRow } from '../components/discoverPage/DiscoverCardDataRow';
const data = [
	{
		content1: 'FEATURED',
		content2: 'NEWS',
		content1Image: 'http://cdn.bndl.tw/news/qltcysbq.dgc.jpg',
		content2Image: 'http://cdn.bndl.tw/news/xzkge43l.0gu.jpg'
	},
	{
		content1: 'TECHNOLOGY',
		content2: 'SPORTS',
		content1Image: 'http://www.youthincmag.com/wp-content/uploads/2018/01/technology.jpg',
		content2Image:
			'https://iaaspr.tmgrup.com.tr/f0a702/806/378/461/0/1282/385?u=https://iaspr.tmgrup.com.tr/2018/07/09/futbol-liglerinde-sezon-planlamasi-aciklandi-1531137042234.jpg'
	},
	{
		content1: 'BUSINESS ',
		content2: 'SCIENCE',
		content1Image: 'http://cdn.bndl.tw/news/ahugkuz5.nnb.jpg',
		content2Image:
			'https://img-s2.onedio.com/id-5b3f6021e36b013913ea5b6b/rev-0/w-500/s-998b1537d5bc25c07d64eb39d5717afca202b0d6.jpg'
	},
	{
		content1: 'PHOTOGRAPHY',
		content2: 'LIFESTYLE',
		content1Image: 'http://cdn.bndl.tw/news/fnoj1ajq.3mk.jpg',
		content2Image: 'https://kadincaozel.com.tr/wp-content/uploads/2018/04/dv2051009-1-300x225.jpg'
	},
	{
		content1: 'POLITICS',
		content2: 'GAMING',
		content1Image:
			'https://img.donanimhaber.com//images/haber/98758/ABD-Cinden-ithal-edilen-1300-urune-ek-vergi-getirdi98758_0.jpg',
		content2Image: 'http://cdn.bndl.tw/news/rxxi2whw.gsv.jpg'
	}
];
class DiscoverPage extends Component {
	renderPage() {
		return data.map((item, index) => {
			return (
				<DiscoverCardDataRow
					content1={item.content1}
					content2={item.content2}
					content1Image={item.content1Image}
					content2Image={item.content2Image}
					key={index}
				/>
			);
		});
	}
	render() {
		return (
			<Page toolbarTitle="Discover">
				<DiscoverCard />

				<ScrollView style={{ backgroundColor: Colors.AppBackgroundColor }}>{this.renderPage()}</ScrollView>
			</Page>
		);
	}
}
export default DiscoverPage;
