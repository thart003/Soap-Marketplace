'use strict';

const e = React.createElement;

class MediumPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
  }

  componentDidMount() {
    fetch(" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rajdeepdas.india&api_key=ouyqtkrmmakif82vhnzesowt4nepfun4ngpo0olk")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const recentItems = [];
    
    // use this loop wisely if you have less blog post than five(5)
    // otherwise app may raise error

    for(var i=0;i<5;i++){
      recentItems.push(items[i]);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul style={{ listStyleType: "none",
          width: "100%",
          padding:"0",
          }}>
            {recentItems.map(item => (
              <a style={{textDecoration: "none"}} href={item.link} key={item.title}>
              <li style={{  marginTop: "5px",}}>
              {item.title}
              </li>
              </a>
            ))}
          </ul>
        );
      }
    }
  }

  const domContainer = document.querySelector('#medium_blog_container');ReactDOM.render(e(MediumPost), domContainer);