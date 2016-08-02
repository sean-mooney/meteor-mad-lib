import { Template } from 'meteor/templating';

Template.body.helpers({

});

Template.body.events({

	'submit #madLib-form': function(event, template) {
		event.preventDefault();

		let exclamation = template.find('#exclamation').value;
		let adverb = template.find('#adverb').value;
		let noun = template.find('#noun').value;
		let verb = template.find('#verb').value;
		let madLib = "'" + exclamation + "!' you say, as you " + adverb + " jump onto your " + noun + " and " + verb + " into the sunset.";
		$("#madLib").hide();
		$("#madLib").text(madLib);
		$("#madLib").css("color","#0000ff");
		$("#madLib").fadeIn("slow");
	}
});