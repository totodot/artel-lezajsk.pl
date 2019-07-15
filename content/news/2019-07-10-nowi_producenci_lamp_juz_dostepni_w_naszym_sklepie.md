---
published: true
date: 2019-07-10T12:57:53.057Z
title: Nowi producenci lamp  juz dostępni w naszym  sklepie!
image: /assets/michael-browning-227688-unsplash.jpg
---
Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nam provident dolor neque quasi, aliquid quas tempore obcaecati velit accusantium enim quia amet fugit ullam distinctio eum iusto quisquam alias iure tempora a inventore asperiores. Libero deserunt, voluptate est, veniam dolorum enim perspiciatis magni mollitia error corporis, sint sit dolorem velit itaque beatae consequuntur. Excepturi expedita in quas id aut, et voluptate facilis inventore distinctio laboriosam cumque a harum incidunt iste nemo. Eveniet iure non impedit similique consequatur hic quis pariatur dolorem dolore at, rem obcaecati alias, necessitatibus voluptates, nihil natus expedita quas. Eius nam repellat nisi tempore, itaque accusantium?



```
class SearchResults extends React.Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.fetchResults();
  }
  fetchResults() {
    const url = this.getFetchUrl();
    // Do the fetching...
  }
  getFetchUrl() {
    return 'http://myapi/results?query' + this.props.query;
  }
  render() {
    // ...
  }
}
```
