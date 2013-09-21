
MeiweiApp.Views.OrderList = MeiweiApp.CollectionView.extend({
	ModelView: MeiweiApp.ModelView.extend({
		template: MeiweiApp.Templates['order-list-item'],
		className: 'order-list-item',
		initModelView: function() {
			_.bindAll(this, 'viewOrder');
			this.bindFastButton(this.$el, this.viewOrder);
		},
		viewOrder: function() {
			MeiweiApp.goTo('OrderDetail', {
				order: this.model.toJSON()
			});
		}
	})
});

MeiweiApp.Pages.OrderList = new (MeiweiApp.PageView.extend({
	onClickLeftBtn: function() { MeiweiApp.goTo('MemberCenter'); },
	initPage: function() {
		this.orders = new MeiweiApp.Collections.Orders();
		this.views = {
			orderList: new MeiweiApp.Views.OrderList({
				collection: this.orders,
				el: this.$('.order-list')
			})
		};
		this.initPageNav(this, this.orders);
		_.bindAll(this, 'getPendingOrders', 'getFulfilledOrders');
		this.bindFastButton(this.$('.filter-pending'), this.getPendingOrders);
		this.bindFastButton(this.$('.filter-fulfilled'), this.getFulfilledOrders);
	},
	getPendingOrders: function() {
		this.$('.filter-fulfilled').removeClass('selected');
		this.$('.filter-pending').addClass('selected');
		this.orders.fetch({ reset: true, data: { status: 'pending' } });
	},
	getFulfilledOrders: function() {
		this.$('.filter-fulfilled').addClass('selected');
		this.$('.filter-pending').removeClass('selected');
		this.orders.fetch({ reset: true, data: { status: 'fulfilled' } });
	},
	render: function() {
		this.getPendingOrders();
	}
}))({el: $("#view-order-list")});
