/*-- fixed navigation bar -*/
var navlinktab = React.createClass({displayName: "navlinktab",
	render: function(){
		return(
			React.createElement("li",{className: this.props.state},
			 React.createElement("a",{href: this.props.href},
			  React.createElement("span",{className: this.props.iconName},null),
				this.props.children))
		);
	}
});

var navlinkdropgrp2 = React.createClass({displayName: "navlinkdropgrp2",
	render: function(){
		return(
			React.createElement("ul",{className: 'nav navbar-nav navbar-right'},
		React.createElement("li",{className: 'dropdown'},
		 React.createElement("a",{href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown'},
		  React.createElement("span",{className: 'glyphicon glyphicon-list'},null)," Other ",
			React.createElement("b",{className: 'caret'},null),
		  React.createElement("ul",{onChange: this.onChange, className: 'dropdown-menu'},
		  this.props.options.map(function (option){
			  return(React.createElement(navlinktab,{state: option.state,href: option.link,iconName: option.icon, key: option.label},option.label)
		    );
		  })
	   )
	  )
	 )
)
		);
	}
});


var navlinkdropgrp1 = React.createClass({displayName: "navlinkdropgrp1",
	render: function(){
		return(
			React.createElement("ul",{className: 'nav navbar-nav navbar-right'},
		React.createElement("li",{className: 'dropdown'},
		 React.createElement("a",{href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown'},
		  React.createElement("span",{className: 'glyphicon glyphicon-list'},null)," Inside ",
			React.createElement("b",{className: 'caret'},null),
		  React.createElement("ul",{onChange: this.onChange, className: 'dropdown-menu'},
		  this.props.options.map(function (option){
			  return(React.createElement(navlinktab,{state: option.state,href: option.link,iconName: option.icon, key: option.label},option.label)
		    );
		  })
	   )
	  )
	 )
)
		);
	}
});

var navlinktabgrp = React.createClass({displayName: "navlinktabgrp",
	render: function(){

		return(React.createElement("ul",{onChange: this.onChange, className: 'nav navbar-nav navbar-right'},
		this.props.options.map(function (option){
			return(React.createElement(navlinktab,{state: option.state, href: option.link,iconName: option.icon, key: option.label},option.label)
		  );
		})
		)
		);
	}
});



var nav = React.createClass({displayName: "nav",
	render: function () {


		return (

			React.createElement("div", {className: "navbar navbar-fixed-top navbar-inverse", role: "navigation"},
      React.createElement("div",{className: "container"},
       React.createElement("div",{className: "navbar-header"},
        React.createElement("button",{type: "button", className: "navbar-toggle",'data-toggle': 'collapse', 'data-target': '#b-menu-1'},
          React.createElement("span",{className: "sr-only"},"Toggle navigation"),
          React.createElement("span",{className: "icon-bar"}),
          React.createElement("span",{className: "icon-bar"}),
          React.createElement("span",{className: "icon-bar"})
        ),
       React.createElement("a",{className: "navbar-brand", href: "http://www.inkbrain.in"},"InkBrain"),
			React.createElement("a",{className: 'navbar-brand', href: 'https://github.com/codegauravg/InkBrainWeb'},
			React.createElement("i",{className: 'fa fa-code-fork'})," Git Fork")
     ),
      React.createElement("div",{className: "collapse navbar-collapse", id: "b-menu-1"},

 				React.createElement(navlinkdropgrp2 ,{options: navdrop2}),
				React.createElement(navlinkdropgrp1 ,{options: navdrop1}),
				React.createElement(navlinktabgrp ,{options: navops})

      )/*-- /.nav-collapse --*/
      ) /*-- /.container -*/
    )/*-- /.navbar --><!-- slider --*/
		);
	}
});
