var React = require("react");

var Breadcrumbs = require('react-breadcrumbs');
var Markdown2Html = require("react-markdown-to-html");

module.exports=React.createClass({
   displayName:"Breadcrumbs",

    render:function(){
        return <div>
            <Breadcrumbs separator=" | " />

            <Markdown2Html src="assets/BREADCRUMBS.md" />

        </div>
    }

});