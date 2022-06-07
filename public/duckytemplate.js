(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['ducky'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <article class=\"response\">\r\n    \r\n            <div class=\"response-content\">\r\n            <p class=\"response-text\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyText") || (depth0 != null ? lookupProperty(depth0,"replyText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyText","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":29}}}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"response-author\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyAuthor") || (depth0 != null ? lookupProperty(depth0,"replyAuthor") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyAuthor","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":31}}}) : helper)))
    + "\r\n            </p>\r\n            <p class=\"response-time\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"replyTime") || (depth0 != null ? lookupProperty(depth0,"replyTime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"replyTime","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":29}}}) : helper)))
    + "\r\n            </p>\r\n            </div>\r\n    </article>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"ducky "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":22},"end":{"line":1,"column":30}}}) : helper)))
    + "\">\r\n    <div class=\"ducky-content\">\r\n        <p class=\"ducky-title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":40}}}) : helper)))
    + "</p>\r\n        <p class=\"type-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":39}}}) : helper)))
    + "</p>\r\n        <p class=\"ducky-text hidden\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":5,"column":37},"end":{"line":5,"column":45}}}) : helper)))
    + "</p>\r\n        <p class=\"ducky-author\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":6,"column":42}}}) : helper)))
    + "</p>\r\n        <p class=\"ducky-time\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":7,"column":30},"end":{"line":7,"column":38}}}) : helper)))
    + "</p>\r\n    </div>\r\n</article> \r\n<article class=\"response-container hidden\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"replies") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":26,"column":13}}})) != null ? stack1 : "")
    + "</article>\r\n";
},"useData":true});
})();