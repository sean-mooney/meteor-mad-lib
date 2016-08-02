import { Template } from 'meteor/templating';

Template.body.helpers({

});

Template.body.events({

	'submit #madLib-form': function(event, template) {
		event.preventDefault();
		console.log("Hello, world");
	}
});