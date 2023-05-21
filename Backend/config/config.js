var config={
    port:8080,
    site:'http://localhost/nodeCRUD_web/#/',

    //database

    mongo:
    {
        hostname:'localhost',
        port:'27017',
        db:'nodeCRUD'
    }
};

config.mongo.url='mongodb://'+config.mongo.hostname+':'+config.mongo.port+'/'+config.mongo.db;
module.exports=config;