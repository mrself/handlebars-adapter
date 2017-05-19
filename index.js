var handlebars = require('handlebars');

module.exports = {
	getHtml: function(templateName) {
		var templateEl = document.getElementById(templateName + '_');
		if (!templateEl)
			throw new Error('Script element does not exists for name: ' + templateName);
		return templateEl.innerHTML;
	},

	compile: function(name) {
		return handlebars.compile(this.getHtml(name));
	},
};