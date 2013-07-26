MeiweiApp.Views.ProductCartItemList = MeiweiApp.CollectionView.extend({
	ModelView: MeiweiApp.ModelView.extend({
		tagName: "div",
		className: "product-cart-item",
		events: { "click .item-delete": "triggerDelete" },
		template: Mustache.compile('<img src="{{ picture }}" alt=""><div class="delete-button">移除</div>'),
		triggerDelete: function(e) { }
	})
});

MeiweiApp.Views.RestaurantOrderForm = MeiweiApp.View.extend({
	initialize: function() {
		this.restaurant = this.model;
		this.model = null;
	},
	template: MeiweiApp.Templates['restaurant-order-form'],
	render: function() {
		var pending
		if (MeiweiApp.pendingOrder == null) {
			var today = new Date();
			pending = {
				orderdate: today.toJSON().slice(0, 10),
				ordertime: '19:00:00',
				personnum: 2
			}
		} else {
			pending = MeiweiApp.pendingOrder.toJSON()
		}
		this.$el.html(this.template({
			restaurant: this.restaurant.toJSON(),
			order: pending
		}));
		MWA.fixBlurScroll(this.$el);
	}
});



MeiweiApp.Pages.RestaurantOrder = new (MeiweiApp.PageView.extend({
	events: {
		'click .contact-info > header': 'selectContact',
		'click .floorplan-select > header': 'selectSeat',
		'click .product-select > header': 'selectProduct',
		'click .order-submit-button': 'submitOrder',
		'click .switch-gender': 'switchGender'
	},
	initPage: function() {
		this.restaurant = new MeiweiApp.Models.Restaurant();
		this.floorplans = new MeiweiApp.Collections.Floorplans();
		this.views = {
			orderForm: new MeiweiApp.Views.RestaurantOrderForm({
				model: this.restaurant,
				el: this.$('.order-info')
			}),
			productCart: new MeiweiApp.Views.ProductCartItemList({
				collection: MeiweiApp.ProductCart,//this.productItems,
				el: this.$('.product-cart')
			})
		};
		_.bindAll(this, 'renderOrderForm', 'fillContact');
	},
	selectContact: function() {
		MeiweiApp.goTo('MemberContacts', {
			multiple: false, 
			callback: this.fillContact
		});
	},
	fillContact: function(contactname, contactphone) {
		this.$('input[name=contactname]').val(contactname);
		this.$('input[name=contactphone]').val(contactphone);
	},
	selectSeat: function() {
		this.floorplans.reset(this.restaurant.get('floorplans'));
		this.floorplans.forEach( function(model){
			model.set( "selected" , this.options.tables);
			model.on('selected',function(){
				var tables = arguments[0];
				this.options.tables = JSON.stringify( $.extend(($.parseJSON(this.options.tables || null) || {}) , $.parseJSON(tables)) ) ;
				if(tables && tables.length>0){
					this.$(".floorplan-select > header span").text("(已选)");
				}
			}, this);
		} , this);
		MeiweiApp.goTo('RestaurantFloorplans', {
			floorplans: this.floorplans,
		});	
	},
	selectProduct: function() {
		MeiweiApp.goTo('ProductPurchase');
	},
	switchGender: function() {
		var s = this.$('.switch-gender');
		if ($(s).hasClass('on')) {
			$(s).removeClass('on');
			$(s).find('input').val($(s).find('label.text-off').text());
		} else {
			$(s).addClass('on');
			$(s).find('input').val($(s).find('label.text-on').text());
		}
	},
	submitOrder: function(e) {
		e.preventDefault();
		var newOrder = new MeiweiApp.Models.Order();
		newOrder.set({
		    member: MeiweiApp.me.id,
		    restaurant: this.restaurant.id,
		    orderdate: this.$('input[name=orderdate]').val(),
		    ordertime: this.$('input[name=ordertime]').val(),
		    personnum: this.$('input[name=personnum]').val(),
		    contactname: this.$('input[name=contactname]').val() + this.$('input[name=contactgender]').val(),
		    contactphone: this.$('input[name=contactphone]').val(),
		    tables: this.options.tables,		
		    other: this.$('textarea[name=other]').text()	
		});
		console.log(this.options.tables + "aaaaa")
		newOrder.save({}, {error: function(model, xhr, options) {
			var errors = JSON.parse(xhr.responseText);
			console.log("Failed submitting new order. " + xhr.responseText);
		}});
	},
	renderOrderForm: function(model, response, options) {
		this.$('.restaurant-info img').attr('src', this.restaurant.get('frontpic'));
		this.$('.restaurant-info h1').html(this.restaurant.get('fullname'));
		this.views.orderForm.render();
		this.views.productCart.render();
		this.showPage();
	},
	render: function(options) {
		this.options = this.options || {};
		_.extend(this.options, options);
		if (options.restaurant) {
			this.restaurant.set(options.restaurant);
			this.renderOrderForm();
		} else if (options.restaurantId) {
			this.restaurant.set({id: options.restaurantId});
			this.restaurant.fetch({ success: this.renderOrderForm });
		}
	}
}))({el: $("#view-restaurant-order")});
