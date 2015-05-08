var footer = React.createClass({displayName: "footer",
                                render function(){
                               return(
                                React.createElement("footer",null,/* License plots */
                                  React.createElement("nav",{className: 'navbar navbar-default navbar-static-bottom', role: 'navigation'},
                                   React.createElement("p",{className: 'navbar-text'},
                                                        React.createElement("a",{href: 'https://github.com/codegauravg/InkBrainWeb/blob/master/LICENSE'},
                                                                            "&copy; Licensed under MIT"),"&copy; InkBrain 2014-2015"
                                                      ),
                               React.createElement("p",{className: 'navbar-text navbar-right'},
                                                   "Development &amp; Maintained with ",
                                                   React.createElement("i",{className: 'fa fa-heart'},null),
                                                   " on ", React.createElement("b",null," &copy; ",React.createElement("a",{href: 'http://getbootstrap.com'}," Bootstrap "),
                                                                               " &copy; ",React.createElement("a",{href: 'https://www.twitter.com'}," Twitter "))," API ",
                                                   React.createElement("br",null,null),"By: ",React.createElement("a",{href: 'https://github.com/codegauravg'}," codegauravg"),
                                                   " &amp; ",React.createElement("a",{href: 'https://github.com/anuragkumarak95'}," anuragkumarak95")
                                                  )
                                    )
                                )
                                );
                               }
});
