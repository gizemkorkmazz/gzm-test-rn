import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Colors';
import NewsCard from '../components/homePage/NewsCard';
import Page from '../components/common/Page';
const news = [
	{
		newsContent: 'Teknoloji',
		newsTime: '2 Day',
		newsTitle: 'İsviçre Bankası İyi Çalışan Ekonomistini Klonladı',
		newsImage: 'http://cdn.bndl.tw/news/ujhphnjx.d5m.jpg',
		newsURL: 'https://www.tamindir.com/haber/isvicre-bankasi-iyi-calisan-ekonomistini-klonladi_38421/'
	},
	{
		newsContent: 'Spor',
		newsTime: '1 Day',
		newsTitle: "İstanbulspor'dan Bursaspor'a sitem!",
		newsImage: 'http://i.hurimg.com/i/hurriyet/75/750x422/5b42fb265379ff3230684329.jpg',
		newsURL: 'http://www.hurriyet.com.tr/sporarena/istanbulspordan-bursaspora-sitem-40890652'
	},
	{
		newsContent: 'Ekonomi',
		newsTime: '20 Munites',
		newsTitle: 'Türkiye ekonomik verileri - 10 Temmuz 2018',
		newsImage: 'http://im.bloomberght.com/2018/07/09/ver1531118450/2136802_720x360.jpg',
		newsURL: 'http://www.bloomberght.com/haberler/haber/2137360-turkiye-ekonomik-verileri-10-temmuz-2018'
	},
	{
		newsContent: 'Yaşam',
		newsTime: '15 Munites',
		newsTitle: '9 - 15 Temmuz haftasında neler olacak?',
		newsImage: 'http://cdn.bndl.tw/news/v1ik4qi4.jto.jpg',
		newsURL:
			'https://hthayat.haberturk.com/astroloji/haftanin-yorumu/haber/1063381-9-15-temmuz-2018-haftalik-burc-yorumu'
	}
];
class HomePage extends Component {
	renderPage() {
		return news.map((item, index) => {
			return (
				<NewsCard
					newsContent={item.newsContent}
					newsTime={item.newsTime}
					newsTitle={item.newsTitle}
					newsImage={item.newsImage}
					newsURL={item.newsURL}
					key={index}
				/>
			);
		});
	}
	render() {
		return (
			<Page toolbarTitle="All" toolbarActionIcon="search">
				<ScrollView style={{ backgroundColor: Colors.AppBackgroundColor, flex: 1 }}>
					{this.renderPage()}
				</ScrollView>
			</Page>
		);
	}
}
export default HomePage;
