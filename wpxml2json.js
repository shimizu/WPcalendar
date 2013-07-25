/*
 * wpエクスポートXML(投稿)をjsonに変換
 * node wpxml2json <wpfile> > wp.json
 */

var FeedParser = require('feedparser')
  , fs = require('fs');

if(!process.argv[2])  throw 'Not File Found!';
var file = process.argv[2];
var data={
    url:"",
    item:[]
};

fs.createReadStream(file)
    .on('error', function (error) {
        console.error(error);
    })
        .pipe(new FeedParser())
        .on('error', function (error) {
        console.error(error);
    })
    .on('meta', function (meta) {
        //console.log('===== %s =====', meta.title);
        data.url = meta.link;
    })
    .on('readable', function() {
        var stream = this, item;
        stream.end = output;
        while (item = stream.read()) {
        data.item.push({title:item.title, url:item.link, date:item["wp:post_date"]["#"]});
        //console.log('Got article: %s', item.title || item.description);
        }
    });

function output(){
    console.log(JSON.stringify(data));
}