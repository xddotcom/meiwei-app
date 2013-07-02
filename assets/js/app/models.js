
/********************************** Restaurants **********************************/


MeiweiApp.Models.Circle = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/restaurants/circle/'
});
MeiweiApp.Collections.Circles = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/restaurants/circle/',
	model: MeiweiApp.Models.Circle
});

MeiweiApp.Models.District = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/restaurants/district/'
});
MeiweiApp.Collections.Districts = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/restaurants/district/',
	model: MeiweiApp.Models.District
});

MeiweiApp.Models.Review = MeiweiApp.Model.extend({});
MeiweiApp.Collections.Reviews = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Review
});

MeiweiApp.Models.Picture = MeiweiApp.Model.extend({});
MeiweiApp.Collections.Pictures = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Picture
});

MeiweiApp.Models.Floorplan = MeiweiApp.Model.extend({});
MeiweiApp.Collections.Floorplans = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Floorplan
});

MeiweiApp.Models.Hour = MeiweiApp.Model.extend({});
MeiweiApp.Collections.Hours = MeiweiApp.Collection.extend({
	model: MeiweiApp.Models.Hour
});

MeiweiApp.Models.Restaurant = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/restaurants/restaurant/',
	parse: function(response) {
		this.hours = new (MeiweiApp.Collections.Hours.extend({url: response.hours}))();
		this.reviews = new (MeiweiApp.Collections.Reviews.extend({url: response.reviews}))();
		this.pictures = new (MeiweiApp.Collections.Pictures.extend({url: response.pictures}))();
		this.floorplans = new (MeiweiApp.Collections.Floorplans.extend({url: response.floorplans}))();
		return response;
	}
});

MeiweiApp.Collections.Restaurants = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/restaurants/restaurant/',
	model: MeiweiApp.Models.Restaurant
});


/********************************** Recommends **********************************/


MeiweiApp.Models.Recommend = MeiweiApp.Model.extend({
	parse: function(response) {
		return response;
	}
});

MeiweiApp.Collections.Recommends = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/restaurants/recommendrule/1/',
	model: MeiweiApp.Models.Recommend,
	parse: function(response) {
		return response.recommends;
	}
});


/********************************** Member **********************************/


MeiweiApp.Models.Profile = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/members/profile/',
	parse: function(response) {
		if (response.results != null) return response.results[0]; else return response;
	}
});

MeiweiApp.Models.Member = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/members/member/',
	parse: function(response) {
		if (response.results != null) return response.results[0]; else return response;
	}
});

MeiweiApp.Models.Contact = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/members/contact/'
});

MeiweiApp.Collections.Contacts = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/members/contact/',
	model: MeiweiApp.Models.Contact
});

MeiweiApp.me = new (MeiweiApp.Models.Member.extend({
	initialize: function() {
		this.contacts = new MeiweiApp.Collections.Contacts();
	},
	profile: new MeiweiApp.Models.Profile(),
	login: function(username, password, callback) {
		var self = this;
		$.ajax({
			async: false, type: 'POST',
			url: MeiweiApp.configs.APIHost + '/members/login/',
			data: {"username": username, "password": password},
			success: function(data) {
				self.set(data);
				self.profile.set(self.attributes['profile']);
				if (callback) callback();
			}
		});
	},
	logout: function(callback) {
		$.ajax({
			async: false, type: 'GET',
			url: MeiweiApp.configs.APIHost + '/members/logout/',
			success: function(data) {
				if (callback) callback();
			}
		});
	},
	register: function(email, moblie, password, callback) {
		var self = this;
		$.ajax({
			async: false, type: 'POST',
			url: MeiweiApp.configs.APIHost + '/members/register/',
			data: {"email": email, "mobile": mobile, "password": password},
			success: function(data) {
				var newMember = data;
				self.login(newMember.username, password);
				if (callback) callback();
			}
		});
	}
}));

//MeiweiApp.me.login('dxdeat', '123abc');


/********************************** Orders **********************************/


MeiweiApp.Models.Order = MeiweiApp.Model.extend({
	urlRoot: MeiweiApp.configs.APIHost + '/orders/order/'
});

MeiweiApp.Collections.Orders = MeiweiApp.Collection.extend({
	url: MeiweiApp.configs.APIHost + '/orders/order/',
	model: MeiweiApp.Models.Order
});
