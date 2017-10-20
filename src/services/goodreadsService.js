const http = require('http');
const xml2js = require('xml2js');
const parser = xml2js.Parser({
    explicitArray: false
});

const goodreadsService = () => {

    const getBookById = (id, cb) => {
        const options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=JoeZ2EQeYNjZMzEqXCL1ew'
        };

        const callback = (response) => {
            let str = '';

            response.on('data', (chunk) => {
                str += chunk;
            });

            response.on('end', () => {
                parser.parseString(str, (err, result) => {
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        };

        http.request(options, callback).end();
    };

    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;
