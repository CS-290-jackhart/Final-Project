(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reply'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"response\">\r\n        <div class=\"response-content\">\r\n        <p class=\"response-text\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyText") || (depth0 != null ? lookupProperty(depth0,"replyText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyText","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"response-author\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyAuthor") || (depth0 != null ? lookupProperty(depth0,"replyAuthor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyAuthor","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":27}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"response-time\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyTime") || (depth0 != null ? lookupProperty(depth0,"replyTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyTime","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":25}}}) : helper)))
    + "\r\n        </p>\r\n        </div>\r\n</article>";
},"useData":true});
})();