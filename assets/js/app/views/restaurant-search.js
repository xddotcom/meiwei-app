
MeiweiApp.Views.MarkerItemInfo = MeiweiApp.ModelView.extend({
	template: MeiweiApp.Templates['restaurant-list-item'],
	events: { 'fastclick': 'viewRestaurant' },
	viewRestaurant: function() {
		MeiweiApp.goTo('RestaurantDetail', {
			restaurant: this.model.toJSON()
		});
	},
	toggle: function(resto) {
		if (this.$el.hasClass('expand')) {
			this.$el.removeClass('expand');
			var self = this;
			setTimeout(function() {
				self.model.set(resto);
				self.$el.addClass('expand');
			}, 600);
		} else {
			this.model.set(resto);
			this.$el.addClass('expand');
		}
	}
});

MeiweiApp.Views.RestaurantListItem = MeiweiApp.ModelView.extend({
	tagName: 'section',
	className: 'restaurant-list-item',
	template: MeiweiApp.Templates['restaurant-list-item'],
	events: { 'tap': 'viewRestaurant' },
	viewRestaurant: function() {
		MeiweiApp.goTo('RestaurantDetail', {
			restaurant: this.model.toJSON()
		});
	},
	calculateDistance: function(lat, lon) {
	    var lat1=lat*Math.PI/18000000, lon1 = lon*Math.PI/18000000;
	    var lat2=MeiweiApp.coords.latitude*Math.PI/180, lon2=MeiweiApp.coords.longitude*Math.PI/180;
	    var R = 6371;
	    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
        var y = (lat2-lat1);
        var d = Math.sqrt(x*x + y*y) * R;
        if (d > 1) {
            return (parseInt(d * 10) / 10) + 'km';
        } else {
            return (d * 1000) + 'm';
        }
	},
	render: function() {
	    var attrs = this.model ? this.model.toJSON() : {};
	    if (attrs.coordinate) attrs.distance = this.calculateDistance(attrs.coordinate.latitude, attrs.coordinate.longitude);
        this.$el.html(this.template(attrs));
        return this;
	}
});

MeiweiApp.Views.RestaurantList = MeiweiApp.CollectionView.extend({
	ModelView: MeiweiApp.Views.RestaurantListItem
});

MeiweiApp.Views.RecommendFilter = MeiweiApp.CollectionView.extend({
    ModelView: MeiweiApp.ModelView.extend({
        tagName: 'li',
        template: Mustache.compile('{{name}}'),
        events: { 'tap': 'selectFilter' },
        selectFilter: function() {
            this.model.trigger('select');
        }
    })
});

MeiweiApp.Views.CuisineFilter = MeiweiApp.CollectionView.extend({
	ModelView: MeiweiApp.ModelView.extend({
		tagName: 'li',
		template: Mustache.compile('{{name}}'),
		events: { 'tap': 'selectFilter' },
		selectFilter: function() {
			this.model.trigger('select');
		}
	})
});

MeiweiApp.Views.CircleFilter = MeiweiApp.Views.CuisineFilter.extend({
    addAll: function() {
        var $list = [];
        for (var i=0; i<this.collection.length; i++) {
            var lastItem = (i == 0 ? null : this.collection.at(i-1));
            var item = this.collection.at(i);
            var modelView = new this.ModelView({model: item});
            if (lastItem == null || item.get('district').id != lastItem.get('district').id) {
                $list.push($('<li class="subtitle"></li>').html(item.get('district').name));
            }
            $list.push(modelView.render().el);
        }
        this.$el.html($list);
    },
});

MeiweiApp.Pages.RestaurantSearch = new (MeiweiApp.PageView.extend({
	onClickLeftBtn: function() { MeiweiApp.goTo('Home'); },
	onClickRightBtn: function() {
		if (this.$('.flipper').hasClass('flip')) {
			this.$('.flipper').removeClass('flip');
		} else {
			this.$('.flipper').addClass('flip');
			this.dropMarkers();
		}
	},
	events: {
		'fastclick .header-btn-left': 'onClickLeftBtn',
		'fastclick .header-btn-right': 'onClickRightBtn',
		'fastclick .collapsible.circle p': 'toggleCircleFilters',
		'fastclick .collapsible.cuisine p': 'toggleCuisineFilters',
		'fastclick .collapsible.recommend p': 'toggleRecommendFilters',
		'tap .scroll-inner': 'closeFilters',
		'submit >header>form': 'searchKeywords',
		'focus >header input': 'clearFormInput'
	},
	clearFormInput: function() { this.$('>header input').val(''); },
	initPage: function() {
		this.lazy = 24 * 60 * 60 * 1000;
		_.bindAll(this, 'refreshList', 'filterRestaurant', 'bindCuisineFilters', 'bindCircleFilters', 'bindRecommendFilters');
		this.restaurants = new MeiweiApp.Collections.Restaurants();
		this.cuisines = new MeiweiApp.Collections.Cuisines();
		this.circles = new MeiweiApp.Collections.Circles();
		this.recommends = new MeiweiApp.Collections.Recommends();
		this.views = {
			restaurantList: new MeiweiApp.Views.RestaurantList({
				collection: this.restaurants,
				el: this.$('.restaurant-list')
			}),
			recommendFilter: new MeiweiApp.Views.CuisineFilter({
                collection: this.recommends,
                el: this.$('.filter.recommend .collapsible-inner ul')
            }),
			cuisineFilter: new MeiweiApp.Views.CuisineFilter({
				collection: this.cuisines,
				el: this.$('.filter.cuisine .collapsible-inner ul')
			}),
			circleFilter: new MeiweiApp.Views.CircleFilter({
				collection: this.circles,
				el: this.$('.filter.circle .collapsible-inner ul')
			}),
			markerInfo: new MeiweiApp.Views.MarkerItemInfo({
				model: new MeiweiApp.Models.Restaurant(),
				el: this.$('.map-marker-info')
			})
		};
		this.initPageNav(this, this.restaurants);
	},
	refreshList: function(collection, xhr, options) {
	    var recommend = options.data && options.data.recommend && this.recommends.where({id: options.data.recommend})[0];
        this.$('.recommend > p > span').html(recommend ? recommend.get('name') : MeiweiApp._('Recommends'));
		var cuisine = options.data && options.data.cuisine && this.cuisines.where({id: options.data.cuisine})[0];
		this.$('.cuisine > p > span').html(cuisine ? cuisine.get('name') : MeiweiApp._('Cuisines'));
		var circle = options.data && options.data.circle && this.circles.where({id: options.data.circle})[0];
		this.$('.circle > p > span').html(circle ? circle.get('name') : MeiweiApp._('Circles'));
		if (this.restaurants.length == 0) {
			this.$('.restaurant-list').prepend(
			    '<p style="padding: 15px;">没有找到合适的餐厅，请尝试搜索其他关键字，或者选择菜系和商圈</p>'
			);
		}
		if (this.$('.flipper').hasClass('flip')) this.dropMarkers();
	},
	searchKeywords: function(e) {
		if (e.preventDefault) e.preventDefault();
		var keywords = this.$('>header input').val();
		this.restaurants.fetch({ reset: true, success: this.refreshList, data: { keywords: keywords } });
		this.$('>header input').blur();
	},
	filterRestaurant: function(filter) {
		this.restaurants.fetch({ reset: true, success: this.refreshList, data: filter });
	},
	toggleRecommendFilters: function() {
        this.$('.collapsible.circle, .collapsible.cuisine').removeClass('expand');
        this.$('.collapsible.recommend').toggleClass('expand');
    },
	toggleCuisineFilters: function() {
		this.$('.collapsible.circle, .collapsible.recommend').removeClass('expand');
		this.$('.collapsible.cuisine').toggleClass('expand');
	},
	toggleCircleFilters: function() {
		this.$('.collapsible.cuisine, .collapsible.recommend').removeClass('expand');
		this.$('.collapsible.circle').toggleClass('expand');
	},
	closeFilters: function() {
	    this.$('.collapsible.recommend').removeClass('expand');
	    this.$('.collapsible.cuisine').removeClass('expand');
        this.$('.collapsible.circle').removeClass('expand');
	},
	bindRecommendFilters: function(recommends, response, options) {
        this.recommendFilterScroller = new IScroll(this.$('.recommend .collapsible-inner').selector, { tap: true });
        var bindFilter = function(recommend) {
            this.listenTo(recommend, "select", function() {
                this.filterRestaurant({recommend: recommend.id});
                this.$('.collapsible.recommend').removeClass('expand');
            });
        };
        recommends.forEach(bindFilter, this);
    },
	bindCuisineFilters: function(cuisines, response, options) {
	    this.cuisineFilterScroller = new IScroll(this.$('.cuisine .collapsible-inner').selector, { tap: true });
		var bindFilter = function(cuisine) {
			this.listenTo(cuisine, "select", function() {
			    this.filterRestaurant({cuisine: cuisine.id});
			    this.$('.collapsible.cuisine').removeClass('expand');
			});
		};
		cuisines.forEach(bindFilter, this);
	},
	bindCircleFilters: function(circles, response, options) {
		this.circleFilterScroller = new IScroll(this.$('.circle .collapsible-inner').selector, { tap: true });
		var bindFilter = function(circle) {
			this.listenTo(circle, "select", function() {
				this.filterRestaurant({circle: circle.id});
				this.$('.collapsible.circle').removeClass('expand');
			});
		};
		circles.forEach(bindFilter, this);
	},
	
	/*********************************************/
	dropMarkers: function () {
		if (!this.map) {
		    this.initializeMap();
		} else {
    		var neighborhoods = [], view =[];
    		this.restaurants.forEach(function(item) {
    			var coord = item.get('coordinate');
    			if (coord) {
                    var latlng = new BMap.Point(coord.longitude / 100000.0 , coord.latitude / 100000.0);
                    neighborhoods.push({latlng: latlng, resto: item.toJSON()});
                    view.push(latlng);
                }
    		}, this);
    		this.map.setViewport(view);
    		this.markers.length = 0;
    		this.map.clearOverlays();
    		for (var i = 0; i < neighborhoods.length; i++) {
    			var meiweiIcon = new BMap.Icon("assets/img/mapmarker.png", new BMap.Size(25, 25), {imageSize: new BMap.Size(25, 25)});
    			var marker = new BMap.Marker(neighborhoods[i].latlng , {enableMassClear:true, icon:meiweiIcon});
    			this.markers.push(marker);
    			this.map.addOverlay(marker);
    			this.addMessage(marker, neighborhoods[i].resto);
    		}
    	}
	},
	addMessage: function(marker, resto) {
		var markerInfo = this.views.markerInfo;
		marker.addEventListener('click', function () {
			markerInfo.toggle(resto);
		});
	},
	initializeMap: function () {
		var self = this;
		var script = 'http://api.map.baidu.com/getscript?v=2.0&ak=D8b53e29c40828bb6b29865e8131db68';
		$.getScript(script, function() {
		    if (!window.BMap) return;
			self.markers = [];
			self.map = new BMap.Map('map_canvas', {enableMapClick: false, maxZoom: 18});
			self.map.enableContinuousZoom();
			self.map.disablePinchToZoom();
			self.map.centerAndZoom(new BMap.Point(MeiweiApp.coords.longitude, MeiweiApp.coords.latitude), 15);
			self.map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM}));
			self.dropMarkers();
		});
	},
	/*********************************************/
	
	render: function() {
		this.$('>header input').focus();
		this.restaurants.fetch({ reset: true, success: this.refreshList });
		this.recommends.fetch({ reset: true, success: this.bindRecommendFilters });
		this.cuisines.fetch({ reset: true, success: this.bindCuisineFilters });
		this.circles.fetch({ reset: true, success: this.bindCircleFilters });
	}
}))({el: $("#view-restaurant-search")});
