function NewsDouble() {
  this.title = 'title'
  this.url = 'url'
  this.summary = 'summary'
  this.image = 'image'
}

function NewsListDouble() {
  this.list = [new NewsDouble, new NewsDouble]
}

NewsListDouble.prototype = {
  ReturnAllNews: function() {
    return [new NewsDouble,  new NewsDouble]
  }
}

SingleNewsView.prototype.DisplaySingleNewsHeader = function() {
  return `<p><a href='id'>title</a></p><img src=image>`
}

var newsList = new NewsListDouble();
var newsListView = new NewsListView(newsList);

describe('NewsListView')
  it('Exists upon instantiation')
  assert.exists(newsListView)

describe('#newslist')
  it('Returns the newslist object')
  assert.areEqual(newsListView.newslist, newsList)

describe('#NewsListToHTML')
  it('Returns an html string of all the news objects in news list')
  assert.areEqual(newsListView.NewsListToHTML(), `<ul><div><li><p><a href='id'>title</a></p><img src=image></li></div><div><li><p><a href='id'>title</a></p><img src=image></li></div></ul>`)
