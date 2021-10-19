const userauthResolvers = require("./userAuth");


const rootResolvers = {
    ...userauthResolvers
};

module.exports = rootResolvers;