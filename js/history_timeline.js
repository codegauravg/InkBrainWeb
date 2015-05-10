

var postslot = React.createClass({displayName: 'postslot',
  render: function(){
    return (
      React.createElement("li",{className: this.props.slotside},
       React.createElement("div",{className: 'timeline-badge primary'},
        React.createElement("a",null,
         React.createElement("i",{className: this.props.icon, rel: 'tooltip', title: this.props.timeago,id: ''})/* post icon here */
        )
       ),
       React.createElement("div",{className: 'timeline-panel'},
        React.createElement("div",{className: 'timeline-heading'},React.createElement("h2",{className: 'text-center'},this.props.headtext),
        /* post image here */
         React.createElement("img",{className: 'img-responsive', src: this.props.headimgsrc},null)
        ),
        React.createElement("div",{className: 'timeline-body'},React.createElement("p",null,this.props.children)), /* post content here */

        /* post footer here */
        React.createElement("div",{className: 'timeline-footer'},React.createElement("a",null,React.createElement("i",{className: 'fa fa-thumb-tack'},null)," Reffered By: "),
         React.createElement("a",{className: 'pull-right', href: this.props.footlink,target: '_blank'},this.props.footlabel)
        )
       )
      )
    );
  }
});


var postlist = React.createClass({displayName: 'postlist',/* group for timeline posts */
  render: function(){
    return(
      React.createElement("div",{className: 'container', onChange: this.onChange},
       React.createElement("div",{className: 'page-header text-center'},React.createElement("h1",{id: 'timeline'},this.props.heading)),
       React.createElement("ul",{className: 'timeline'},
        this.props.options.map(function(option){
          return(
            React.createElement(postslot,
              {slotside: option.side,icon: option.icon,timeago: option.timeago,headtext: option.htext,headimgsrc: option.himg,footlink: option.flink,footlabel: option.flabel,key: option.key},
                option.content)
          );
        }),
        React.createElement("li",{className: 'clearfix',style: this.props.style},null)
       )
      )
    );
  }
});
