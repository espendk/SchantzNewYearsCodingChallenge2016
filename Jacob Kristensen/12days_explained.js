// Include the zlib module.
var z = require('zlib');
// Make a new buffer object from base64 encoded string.
var b = new Buffer('3ZJJTgMxEEX3fYp/BDrM7CAhYZGQiPQFrLhIl/AQld0JuT12cwBkxNgrW7b8670vLx1iS6hDhFZH+GeMW+EQrQqVPSJKRzB+TwjkIqKHpZvqFislUVhvCeygsCIlaISoqpbvgSOnCwKbg0fTSTSESboLlUrP1cdTTqVoSpveYirkNi0eyIVPzz2LbcHcqe8EY2UMuy3uWHT4QpTzMhROBzNvNDk8JZzwvXAXRXBrfsWMKFDKmqtjAvpp3ssyXtonrPVBuZDS1ge2NjP/vsZVkcY9b9uIhWKdNRZsXnqLvyp3XST3yI4SqGYKmCi3ycD/TLg+KTJuEtXcS+82J7XLxENooS771KYXWfGOJOQlIw+1mlFRNfUIE+mszcX0m155+H29AQ==', 'base64');
// Use zlib to decompress. Don't do any error checking (the e variable is ignored).
z.inflateRaw(b, function(e, s) {
	//Write to stdout.
	console.log(s.toString());
});

/* The above can be chained instead of using variables.
 * Also we can omit semicolons.
 * And we can omit the "new" keyword when creating the Buffer.
 So it looks like this:
 require('zlib').inflateRaw(Buffer('3ZJJTgMxEEX3fYp/BDrM7CAhYZGQiPQFrLhIl/AQld0JuT12cwBkxNgrW7b8670vLx1iS6hDhFZH+GeMW+EQrQqVPSJKRzB+TwjkIqKHpZvqFislUVhvCeygsCIlaISoqpbvgSOnCwKbg0fTSTSESboLlUrP1cdTTqVoSpveYirkNi0eyIVPzz2LbcHcqe8EY2UMuy3uWHT4QpTzMhROBzNvNDk8JZzwvXAXRXBrfsWMKFDKmqtjAvpp3ssyXtonrPVBuZDS1ge2NjP/vsZVkcY9b9uIhWKdNRZsXnqLvyp3XST3yI4SqGYKmCi3ycD/TLg+KTJuEtXcS+82J7XLxENooS771KYXWfGOJOQlIw+1mlFRNfUIE+mszcX0m155+H29AQ==', 'base64'), function(e, o) {
 	console.log(o.toString())
 })

The base64 encode string can be created like this:
const zlib = require('zlib');
const fs = require('fs');

fs.readFile('12daysofchristmas.txt', 'utf8', function(err_fs, data){
	if (err_fs) {
		console.log(err_fs);
	} else {
		zlib.deflateRaw(data, function(err_zlib, buf){
			if (err_zlib) {
				console.log(err_zlib);
			} else {
				var s = buf.toString('base64');
				console.log(s.length);
				console.log(s);
			}
		});
	}
});

Before running the above, the file 12daysofchristmas.txt was converted to Linux
line endings (bonus: Linux uses one byte for line ending while Windows uses two
byes: with 113 lines in the file this is a nice saving) and the newline on the
last line was removed since console.log appends a newline.
*/
