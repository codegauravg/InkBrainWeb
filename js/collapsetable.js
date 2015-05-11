
var table = React.createClass({displayName: 'table',
  render: function(){
    return(
      React.createElement("div",{className: 'container col-xs-12 col-md-12'},
      React.createElement("table",{className: 'table table-hover'},
       React.createElement("thead",null,
        React.createElement("tr",null,
         React.createElement("th",null,"CODE"),React.createElement("th",null,"USE")
       )
      ),
      React.createElement("tbody",null,
       this.props.options.map(function(option){return(
         React.createElement("tr",{key: option.id},
         React.createElement("th",{className: 'row'},option.row1),
         React.createElement("td",null,option.row2)
       )
       );})
      )
     )
     )
    );
  }
});

var collapsetab = React.createClass({displayName: 'collapsetab',
  render: function(){
    return(
      React.createElement("div",{className: 'container col-xs-12 col-md-12'},
       React.createElement("div",{className: 'row'},
        React.createElement("div",null,
        /* beginning of panel group */
         React.createElement("div",{className: 'panel-group', id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true'},
          /* panel content starts */
          this.props.options.map(function(option){return(
            React.createElement("div",{className: 'panel panel-default',key: option.uid},
             React.createElement("span",{className: 'side-tab', 'data-target': '#tab1', 'data-toggle': 'tab', role: 'tab', 'aria-expanded': 'false'},
              React.createElement("div",{className: 'panel-heading', role: 'tab', id: 'heading'+option.uid, 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapse'+option.uid, 'aria-expanded': 'false', 'aria-controls': 'collapse'+option.uid},
               React.createElement("h4",{className: 'panel-title text-center'},option.heading)
              )
             ),
             React.createElement("div",{className: 'panel-collapse collapse',id: 'collapse'+option.uid, role: 'tabpanel', 'aria-labelledby': 'heading'+option.uid},
              React.createElement("div",{className: 'panel-body text-center'},
              /* tab content comes here.*/ option.content,React.createElement(table,{options: option.tblops}))
             )
            )
          );})
         )
        )
       )
      )
    );
  }
});
