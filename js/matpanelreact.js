var matpanel = React.createClass({displayName: "matpanel",
  render: function(){
    return(
      React.createElement("div",{className: 'col-xs-12 col-sm-12 col-md-12 col-lg-12'},
       React.createElement("div",{className: 'box'},
        React.createElement("div",{className: 'box-icon'},
         React.createElement("span",{className: this.props.icon},null)
        ),
        React.createElement("div",{className: 'info'},
         React.createElement("h4",{className: 'text-center'},this.props.head),
         React.createElement("p",null,React.createElement("i",{className: 'fa fa-2x fa-quote-left'},null),this.props.children,React.createElement("i",{className: 'fa fa-quote-right'},null)),
        React.createElement("a",{href: this.props.btnlink, className: 'btn'},this.props.btnlabel)
        )
       )
      )
    );

  }

});

var mpanelgrp = React.createClass({displayName: "mpanelgrp",
  render: function(){
    return(
      React.createElement("div",{className: 'row'},
       React.createElement("div",{onChange: this.onChange ,className: this.props.colsize},
       this.props.options.map(function(option){return(
         React.createElement(matpanel,{icon: option.icon,head: option.head,btnlabel: option.btnlabel,btnlink: option.btnlink, key: option.head},option.content)
         );
       })
       )
      )
    );
  }
});
