MeiweiApp.Bootstrap = {
	set : function(key, json) {
		try {
			localStorage.setItem('bootstrap-' + key, JSON.stringify(json));
		} catch (e) {
		}
	},
	get : function(key) {
		try {
			return JSON.parse(localStorage.getItem('bootstrap-' + key));
		} catch (e) {
			localStorage.removeItem('bootstrap-' + key);
			return {};
		}
	}
};

MeiweiApp.Bootstrap.Home = {
	recommendnames : [{
		"id" : 5,
		"isrecommended" : 1,
		"order" : 1,
		"name" : "每周餐厅"
	}, {
		"id" : 18,
		"isrecommended" : 1,
		"order" : 2,
		"name" : "约会/告白"
	}, {
		"id" : 4,
		"isrecommended" : 1,
		"order" : 3,
		"name" : "花园洋房"
	}, {
		"id" : 16,
		"isrecommended" : 1,
		"order" : 4,
		"name" : "闺蜜下午茶"
	}, {
		"id" : 17,
		"isrecommended" : 1,
		"order" : 5,
		"name" : "风情午夜"
	}, {
		"id" : 19,
		"isrecommended" : 1,
		"order" : 6,
		"name" : "商务宴请"
	}, {
		"id" : 30,
		"isrecommended" : 1,
		"order" : 7,
		"name" : "团圆家宴"
	}, {
		"id" : 29,
		"isrecommended" : 1,
		"order" : 8,
		"name" : "浦江夜景"
	}, {
		"id" : 28,
		"isrecommended" : 1,
		"order" : 9,
		"name" : "\"万寿无疆\"宴"
	}, {
		"id" : 25,
		"isrecommended" : 1,
		"order" : 10,
		"name" : "狂欢派对"
	}, {
		"id" : 24,
		"isrecommended" : 1,
		"order" : 11,
		"name" : "阳光露台"
	}, {
		"id" : 8,
		"isrecommended" : 1,
		"order" : 12,
		"name" : "小型婚宴"
	}],
	recommend_items : [{
		"id" : 299,
		"order" : 2,
		"restaurant" : {
			"id" : 103,
			"fullname" : "金轩中餐厅(上海浦东丽思卡尔顿酒店)",
			"address" : "浦东新区世纪大道8号上海国金中心丽思卡尔顿酒店53楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/3bdb8f801ba14d1d45674f9e611566d5_1.jpg"
		}
	}, {
		"id" : 18,
		"order" : 3,
		"restaurant" : {
			"id" : 109,
			"fullname" : "思南公馆酒店法国餐厅",
			"address" : "卢湾区思南路51号思南公馆酒店57号楼",
			"discount" : "“新西兰美食美酒盛宴节”<br/>\r\n活动时间为10月23日-11月10日<br/>\r\n菜单：1.套餐，588元/位，五道菜；2.零点菜单<br/>\r\n（由主厨Peter.Miller烹制的各种新西兰当地非常有特色的食材，如新西兰深海鳌虾，帝王三文鱼，牛脸肉，鹿肉，生蚝，美利奴羊肉，并精心挑选了新西兰当地最富盛名葡萄酒产区的美酒。）<br/>（活动期间，更有抽奖活动等您来夺大礼）<br/>\r\n<br/>\r\n晚餐套餐88折优惠（仅限工作日，且不能和酒店的其他优惠同时享受。有效期至2013年12月31日）；<br/>\r\n午餐套餐218元/位（两道主菜）免费升级为258元/位（三道主菜）（有效期至2013年12月31日）。 ",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/ccdd5271382009add55d20e04d6d9b3d.jpg"
		}
	}, {
		"id" : 17,
		"order" : 4,
		"restaurant" : {
			"id" : 40,
			"fullname" : "壹火锅会所",
			"address" : "卢湾区复兴中路535号思南公馆30号",
			"discount" : "消费即可获赠200元现金抵用券，消费满5000至10000元可获赠价值500元现金抵用券. 消费满10000元可获赠1000元现金抵用券",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/b2deadfa140c0cb985d20984d37069f9_1.jpg"
		}
	}, {
		"id" : 15,
		"order" : 5,
		"restaurant" : {
			"id" : 210,
			"fullname" : "M1NT 餐厅",
			"address" : "黄浦区福州路318号高腾大厦24楼(近山东中路)",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/ecb333ee5010091fb6e3739d107ec360.jpg"
		}
	}, {
		"id" : 14,
		"order" : 6,
		"restaurant" : {
			"id" : 174,
			"fullname" : "龙庭会所",
			"address" : "普陀区云岭东路88号成龙电影艺术公园3号楼龙庭会所（近中江路）",
			"discount" : "会员专享午市198元自助套餐",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/ce77a6191f7111b19dd69edef590d6d3_1.jpg"
		}
	}, {
		"id" : 19,
		"order" : 7,
		"restaurant" : {
			"id" : 198,
			"fullname" : "东京和食",
			"address" : "黄浦区中山东一路6号外滩6号2楼（近广东路）",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/7a769e219222953e95504f55053feec9.jpg"
		}
	}, {
		"id" : 13,
		"order" : 8,
		"restaurant" : {
			"id" : 183,
			"fullname" : "滩外楼Y2C2",
			"address" : "黄浦区外马路579号5楼\r\n",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/f0c6f901385737544864eb666078dcb2_1.jpg"
		}
	}, {
		"id" : 16,
		"order" : 9,
		"restaurant" : {
			"id" : 193,
			"fullname" : "黄浦会",
			"address" : "黄浦区中山东一路3号外滩3号5楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/f00cd517ad7806871f7bdaf244402741.jpg"
		}
	}, {
		"id" : 12,
		"order" : 10,
		"restaurant" : {
			"id" : 196,
			"fullname" : "Mr & Mrs Bund",
			"address" : "黄浦区中山东一路18号外滩十八号6楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/6315a62795770e17500a790ba8718769.jpg"
		}
	}, {
		"id" : 306,
		"order" : 11,
		"restaurant" : {
			"id" : 215,
			"fullname" : "衡山九弄",
			"address" : "上海市徐汇区衡山路9弄1号",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/f1ddcfc783fa4201b4c1dcb8f444ddc3.jpg"
		}
	}, {
		"id" : 304,
		"order" : 12,
		"restaurant" : {
			"id" : 212,
			"fullname" : "逸龙阁（上海半岛酒店）",
			"address" : "上海市外滩中山东一路32号上海半岛酒店二层",
			"discount" : "全单九折",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/586265002a00320792d3865ba7cdf5a1.jpg"
		}
	}, {
		"id" : 303,
		"order" : 13,
		"restaurant" : {
			"id" : 203,
			"fullname" : "海怡西餐厅（上海外滩悦榕庄）",
			"address" : "虹口区海平路19号上海外滩悦榕庄1楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/f7241e2cf66440ddb59f3e3534278a1f.jpg"
		}
	}, {
		"id" : 305,
		"order" : 14,
		"restaurant" : {
			"id" : 104,
			"fullname" : "意味轩(上海浦东丽思卡尔顿酒店)",
			"address" : "浦东新区世纪大道8号上海国金中心丽思卡尔顿酒店52楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/d946358bd8d081ebd2dc8f1b40ddf210_4.jpg"
		}
	}, {
		"id" : 307,
		"order" : 15,
		"restaurant" : {
			"id" : 108,
			"fullname" : "思南公馆酒店中餐厅",
			"address" : "卢湾区思南路55号思南公馆55号楼",
			"discount" : "周一至周五，中式下午茶套餐55折优惠",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/a986806e8b7fed63bda51bb7e0e1917d.jpg"
		}
	}, {
		"id" : 308,
		"order" : 16,
		"restaurant" : {
			"id" : 184,
			"fullname" : "申粤轩",
			"address" : "华山路849号丁香花园2号楼",
			"discount" : "9折优惠（不含酒水海鲜燕鲍翅）\r\n",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/697c8baeed9ff878eeef82dc1726b0e4.jpg"
		}
	}, {
		"id" : 309,
		"order" : 17,
		"restaurant" : {
			"id" : 213,
			"fullname" : "艾利爵士餐厅（上海半岛酒店）",
			"address" : "上海市外滩中山东一路32号上海半岛酒店十三层",
			"discount" : "全单九折",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/45322df423a38eb81eed0d7a87b4c049.jpg"
		}
	}, {
		"id" : 310,
		"order" : 18,
		"restaurant" : {
			"id" : 206,
			"fullname" : "TOPS 屋顶露台酒吧（上海外滩悦榕庄）",
			"address" : "虹口区海平路19号外滩悦榕庄顶楼露台",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/9deb8e428fb03c7eb626744b29c069ef.jpg"
		}
	}, {
		"id" : 311,
		"order" : 19,
		"restaurant" : {
			"id" : 194,
			"fullname" : "新视角餐厅酒廊",
			"address" : "黄浦区中山东一路3号外滩3号7楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/3d3e89090d72ed77fe7abc7f5ae43b31.jpg"
		}
	}, {
		"id" : 312,
		"order" : 20,
		"restaurant" : {
			"id" : 125,
			"fullname" : "金茂俱乐部(金茂君悦大酒店)",
			"address" : "浦东新区世纪大道88号金茂君悦大酒店86楼",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/141985c0f93396e5e6873799374caa3a.jpg"
		}
	}, {
		"id" : 313,
		"order" : 21,
		"restaurant" : {
			"id" : 36,
			"fullname" : "T8 Restaurant & Bar",
			"address" : "卢湾区太仓路181弄(新天地北里8单元1楼)",
			"discount" : "",
			"frontpic" : "http://meiwei.u.qiniudn.com/media/restaurant/8ec72ab260c7c8fdf59ddb58812e7036_1.jpg"
		}
	}],
	product_items : [{
		"id" : 27,
		"name" : "鲜花",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/7d25b335373bb81d2ff2ff6ac42ba087.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "350元",
		"description" : "直径25cm"
	}, {
		"id" : 40,
		"name" : "蛋糕",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/ef658119e5b275adf2a60959408d9941_1.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "1200元 (参考)",
		"description" : ""
	}, {
		"id" : 43,
		"name" : "美位活动策划",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/f3f859e3e7b13aacdeceae58759c25b5.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "",
		"description" : ""
	}, {
		"id" : 45,
		"name" : "私人保镖",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/0eab1c6918fdf3ef14e904e9d8833911_1.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "",
		"description" : ""
	}, {
		"id" : 46,
		"name" : "乐队演出",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/b1557f1913a3884e6334557cee3f2189_1.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "",
		"description" : ""
	}, {
		"id" : 47,
		"name" : "外烩服务",
		"picture" : "http://meiwei.u.qiniudn.com/media/product/5f782ee76cbda4d264298f76c9ece8b2_1.jpg",
		"count" : 0,
		"credit" : 0,
		"price" : "",
		"description" : ""
	}]
};

MeiweiApp.Bootstrap.Filters = {
	recommendnames : [{
		"id" : 5,
		"isrecommended" : 1,
		"order" : 1,
		"name" : "每周餐厅"
	}, {
		"id" : 18,
		"isrecommended" : 1,
		"order" : 2,
		"name" : "约会/告白"
	}, {
		"id" : 4,
		"isrecommended" : 1,
		"order" : 3,
		"name" : "花园洋房"
	}, {
		"id" : 16,
		"isrecommended" : 1,
		"order" : 4,
		"name" : "闺蜜下午茶"
	}, {
		"id" : 17,
		"isrecommended" : 1,
		"order" : 5,
		"name" : "风情午夜"
	}, {
		"id" : 19,
		"isrecommended" : 1,
		"order" : 6,
		"name" : "商务宴请"
	}, {
		"id" : 30,
		"isrecommended" : 1,
		"order" : 7,
		"name" : "团圆家宴"
	}, {
		"id" : 29,
		"isrecommended" : 1,
		"order" : 8,
		"name" : "浦江夜景"
	}, {
		"id" : 28,
		"isrecommended" : 1,
		"order" : 9,
		"name" : "\"万寿无疆\"宴"
	}, {
		"id" : 25,
		"isrecommended" : 1,
		"order" : 10,
		"name" : "狂欢派对"
	}, {
		"id" : 24,
		"isrecommended" : 1,
		"order" : 11,
		"name" : "阳光露台"
	}, {
		"id" : 8,
		"isrecommended" : 1,
		"order" : 12,
		"name" : "小型婚宴"
	}],
	circles : [{
		"id" : 26,
		"isrecommended" : 1,
		"order" : 1,
		"name" : "思南公馆区",
		"district" : {
			"id" : 6,
			"city" : "上海",
			"name" : "卢湾区",
			"order" : 1
		}
	}, {
		"id" : 24,
		"isrecommended" : 1,
		"order" : 4,
		"name" : "新天地",
		"district" : {
			"id" : 6,
			"city" : "上海",
			"name" : "卢湾区",
			"order" : 1
		}
	}, {
		"id" : 25,
		"isrecommended" : 1,
		"order" : 8,
		"name" : "淮海路",
		"district" : {
			"id" : 6,
			"city" : "上海",
			"name" : "卢湾区",
			"order" : 1
		}
	}, {
		"id" : 42,
		"isrecommended" : 1,
		"order" : 20,
		"name" : "打浦桥",
		"district" : {
			"id" : 6,
			"city" : "上海",
			"name" : "卢湾区",
			"order" : 1
		}
	}, {
		"id" : 10,
		"isrecommended" : 1,
		"order" : 2,
		"name" : "陆家嘴",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 11,
		"isrecommended" : 1,
		"order" : 9,
		"name" : "八佰伴",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 15,
		"isrecommended" : 1,
		"order" : 35,
		"name" : "碧云社区",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 14,
		"isrecommended" : 1,
		"order" : 36,
		"name" : "世博大道",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 12,
		"isrecommended" : 1,
		"order" : 41,
		"name" : "世纪公园",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 13,
		"isrecommended" : 1,
		"order" : 44,
		"name" : "金桥",
		"district" : {
			"id" : 3,
			"city" : "上海",
			"name" : "浦东新区",
			"order" : 2
		}
	}, {
		"id" : 16,
		"isrecommended" : 1,
		"order" : 2,
		"name" : "外滩",
		"district" : {
			"id" : 4,
			"city" : "上海",
			"name" : "黄浦区",
			"order" : 3
		}
	}, {
		"id" : 18,
		"isrecommended" : 1,
		"order" : 6,
		"name" : "人民广场",
		"district" : {
			"id" : 4,
			"city" : "上海",
			"name" : "黄浦区",
			"order" : 3
		}
	}, {
		"id" : 17,
		"isrecommended" : 1,
		"order" : 7,
		"name" : "老码头",
		"district" : {
			"id" : 4,
			"city" : "上海",
			"name" : "黄浦区",
			"order" : 3
		}
	}, {
		"id" : 54,
		"isrecommended" : 1,
		"order" : 24,
		"name" : "南京东路",
		"district" : {
			"id" : 4,
			"city" : "上海",
			"name" : "黄浦区",
			"order" : 3
		}
	}, {
		"id" : 8,
		"isrecommended" : 1,
		"order" : 5,
		"name" : "静安寺",
		"district" : {
			"id" : 2,
			"city" : "上海",
			"name" : "静安区",
			"order" : 4
		}
	}, {
		"id" : 19,
		"isrecommended" : 1,
		"order" : 18,
		"name" : "南京西路",
		"district" : {
			"id" : 2,
			"city" : "上海",
			"name" : "静安区",
			"order" : 4
		}
	}, {
		"id" : 3,
		"isrecommended" : 1,
		"order" : 8,
		"name" : "徐家汇",
		"district" : {
			"id" : 1,
			"city" : "上海",
			"name" : "徐汇区",
			"order" : 5
		}
	}, {
		"id" : 58,
		"isrecommended" : 1,
		"order" : 15,
		"name" : "肇嘉浜路",
		"district" : {
			"id" : 1,
			"city" : "上海",
			"name" : "徐汇区",
			"order" : 5
		}
	}, {
		"id" : 57,
		"isrecommended" : 1,
		"order" : 17,
		"name" : "丁香花园",
		"district" : {
			"id" : 1,
			"city" : "上海",
			"name" : "徐汇区",
			"order" : 5
		}
	}, {
		"id" : 2,
		"isrecommended" : 1,
		"order" : 18,
		"name" : "衡山路",
		"district" : {
			"id" : 1,
			"city" : "上海",
			"name" : "徐汇区",
			"order" : 5
		}
	}, {
		"id" : 28,
		"isrecommended" : 1,
		"order" : 23,
		"name" : "音乐学院",
		"district" : {
			"id" : 1,
			"city" : "上海",
			"name" : "徐汇区",
			"order" : 5
		}
	}, {
		"id" : 23,
		"isrecommended" : 1,
		"order" : 31,
		"name" : "虹桥",
		"district" : {
			"id" : 5,
			"city" : "上海",
			"name" : "长宁区",
			"order" : 6
		}
	}, {
		"id" : 22,
		"isrecommended" : 1,
		"order" : 32,
		"name" : "古北",
		"district" : {
			"id" : 5,
			"city" : "上海",
			"name" : "长宁区",
			"order" : 6
		}
	}, {
		"id" : 21,
		"isrecommended" : 1,
		"order" : 33,
		"name" : "中山公园",
		"district" : {
			"id" : 5,
			"city" : "上海",
			"name" : "长宁区",
			"order" : 6
		}
	}, {
		"id" : 34,
		"isrecommended" : 1,
		"order" : 32,
		"name" : "长风公园",
		"district" : {
			"id" : 9,
			"city" : "上海",
			"name" : "普陀区",
			"order" : 7
		}
	}, {
		"id" : 32,
		"isrecommended" : 1,
		"order" : 40,
		"name" : "曲阳",
		"district" : {
			"id" : 8,
			"city" : "上海",
			"name" : "虹口区",
			"order" : 8
		}
	}, {
		"id" : 31,
		"isrecommended" : 1,
		"order" : 42,
		"name" : "北外滩",
		"district" : {
			"id" : 8,
			"city" : "上海",
			"name" : "虹口区",
			"order" : 8
		}
	}, {
		"id" : 33,
		"isrecommended" : 1,
		"order" : 50,
		"name" : "四川北路",
		"district" : {
			"id" : 8,
			"city" : "上海",
			"name" : "虹口区",
			"order" : 8
		}
	}, {
		"id" : 60,
		"isrecommended" : 1,
		"order" : 99,
		"name" : "和平公园",
		"district" : {
			"id" : 8,
			"city" : "上海",
			"name" : "虹口区",
			"order" : 8
		}
	}, {
		"id" : 30,
		"isrecommended" : 1,
		"order" : 51,
		"name" : "五角场",
		"district" : {
			"id" : 7,
			"city" : "上海",
			"name" : "杨浦区",
			"order" : 9
		}
	}, {
		"id" : 55,
		"isrecommended" : 1,
		"order" : 20,
		"name" : "闸北公园",
		"district" : {
			"id" : 26,
			"city" : "上海",
			"name" : "闸北区",
			"order" : 10
		}
	}, {
		"id" : 61,
		"isrecommended" : 1,
		"order" : 2147483647,
		"name" : "其他",
		"district" : {
			"id" : 27,
			"city" : "上海",
			"name" : "其他",
			"order" : 99
		}
	}],
	cuisines : [{
		"id" : 2,
		"name" : "粤菜",
		"order" : 1,
		"type" : 1
	}, {
		"id" : 6,
		"name" : "本帮江浙菜",
		"order" : 2,
		"type" : 1
	}, {
		"id" : 3,
		"name" : "火锅",
		"order" : 3,
		"type" : 1
	}, {
		"id" : 10,
		"name" : "西式简餐",
		"order" : 4,
		"type" : 1
	}, {
		"id" : 5,
		"name" : "法国菜",
		"order" : 5,
		"type" : 1
	}, {
		"id" : 51,
		"name" : "酒吧",
		"order" : 6,
		"type" : 1
	}, {
		"id" : 1,
		"name" : "意大利菜",
		"order" : 7,
		"type" : 1
	}, {
		"id" : 4,
		"name" : "日本料理",
		"order" : 8,
		"type" : 1
	}, {
		"id" : 7,
		"name" : "创意菜",
		"order" : 9,
		"type" : 1
	}, {
		"id" : 31,
		"name" : "湘菜",
		"order" : 10,
		"type" : 1
	}, {
		"id" : 17,
		"name" : "宁波菜",
		"order" : 11,
		"type" : 1
	}, {
		"id" : 19,
		"name" : "西班牙菜",
		"order" : 12,
		"type" : 1
	}, {
		"id" : 23,
		"name" : "英国菜",
		"order" : 13,
		"type" : 1
	}, {
		"id" : 8,
		"name" : "淮扬菜",
		"order" : 14,
		"type" : 1
	}, {
		"id" : 58,
		"name" : "海鲜",
		"order" : 15,
		"type" : 1
	}, {
		"id" : 24,
		"name" : "宫廷菜",
		"order" : 16,
		"type" : 1
	}, {
		"id" : 62,
		"name" : "川菜",
		"order" : 17,
		"type" : 1
	}, {
		"id" : 15,
		"name" : "燕鲍翅",
		"order" : 18,
		"type" : 1
	}, {
		"id" : 25,
		"name" : "印度菜",
		"order" : 19,
		"type" : 1
	}, {
		"id" : 12,
		"name" : "自助餐",
		"order" : 20,
		"type" : 1
	}, {
		"id" : 49,
		"name" : "泰国菜",
		"order" : 20,
		"type" : 1
	}, {
		"id" : 52,
		"name" : "烧烤",
		"order" : 21,
		"type" : 1
	}, {
		"id" : 53,
		"name" : "泛亚菜式",
		"order" : 22,
		"type" : 1
	}, {
		"id" : 54,
		"name" : "现代欧陆菜系",
		"order" : 23,
		"type" : 1
	}, {
		"id" : 47,
		"name" : "其他西餐",
		"order" : 24,
		"type" : 1
	}, {
		"id" : 20,
		"name" : "绍兴菜",
		"order" : 25,
		"type" : 1
	}, {
		"id" : 9,
		"name" : "牛排",
		"order" : 26,
		"type" : 1
	}, {
		"id" : 46,
		"name" : "咖啡厅",
		"order" : 27,
		"type" : 1
	}, {
		"id" : 26,
		"name" : "蟹宴",
		"order" : 28,
		"type" : 1
	}, {
		"id" : 56,
		"name" : "全天候",
		"order" : 29,
		"type" : 1
	}, {
		"id" : 22,
		"name" : "其他",
		"order" : 100,
		"type" : 1
	}]
};

if (!MeiweiApp.Bootstrap.get('home-recommendnames'))
	MeiweiApp.Bootstrap.set('home-recommendnames', MeiweiApp.Bootstrap.Home.recommendnames);
if (!MeiweiApp.Bootstrap.get('home-recommend-items'))
	MeiweiApp.Bootstrap.set('home-recommend-items', MeiweiApp.Bootstrap.Home.recommend_items);
if (!MeiweiApp.Bootstrap.get('home-product-items'))
	MeiweiApp.Bootstrap.set('home-product-items', MeiweiApp.Bootstrap.Home.product_items);
if (!MeiweiApp.Bootstrap.get('restaurant-search-filters'))
	MeiweiApp.Bootstrap.set('restaurant-search-filters', MeiweiApp.Bootstrap.Filters);
