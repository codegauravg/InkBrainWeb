var footer = React.createClass({displayName: "footer",
                                render: function(){
                               return(
                                   React.createElement("br",null,null),React.createElement("br",null,null),
                                React.createElement("footer",null,/* License plots */
                                  React.createElement("nav",{className: 'navbar navbar-default navbar-static-bottom', role: 'navigation'},
                                   React.createElement("p",{className: 'navbar-text'},
                                                        React.createElement("a",{href: 'https://github.com/codegauravg/InkBrainWeb/blob/master/LICENSE'},
                                                                            React.createElement("i",{className: 'fa fa-copyright'},null)," Licensed under MIT"),React.createElement("i",{className: 'fa fa-copyright'},null)," InkBrain 2014-2015",
                                                       React.createElement("br"),React.createElement("br"),"Lets code till the ",React.createElement("b",null,"SUNSHINE")," comes..."
                                                      ),
                               React.createElement("p",{className: 'navbar-text navbar-right'},
                                                   "Development & Maintained with ",
                                                   React.createElement("i",{className: 'fa fa-heart'},null),
                                                   " on ", React.createElement("b",null,React.createElement("i",{className: 'fa fa-copyright'},null),React.createElement("a",{href: 'http://getbootstrap.com'}," Bootstrap "),
                                                                               React.createElement("i",{className: 'fa fa-copyright'},null),React.createElement("a",{href: 'https://www.twitter.com'}," Twitter ")," API "),
                                                                              React.createElement("br",null,null),"& Rendered on: ",React.createElement("b",null,React.createElement("a",{href: 'https://facebook.github.io/react/'},React.createElement("i",{className: 'fa fa-facebook'},null)," React")),

                                                   React.createElement("br",null,null),"By: ",React.createElement("a",{href: 'https://github.com/codegauravg'}," codegauravg"),
                                                   " & ",React.createElement("a",{href: 'https://github.com/anuragkumarak95'}," anuragkumarak95")
                                                  )
                                    )
                                )
                                );
                               }
});
