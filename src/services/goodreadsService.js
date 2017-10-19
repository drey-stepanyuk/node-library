const http = require('http');
const xml2js = require('xml2js');
const parser = xml2js.Parser({explicitArray: false});

const goodreadsService = () => {
    
    const getBookById = (id, cb) => {
        cb(null, {description: 'Our Description'});
    };
    
    return {
        getBookById: getBookById
    };
};

module.exports = goodreadsService;