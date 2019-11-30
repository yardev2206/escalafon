// registrar la mutaciones de la aplicacion
const WorkResolver = require('./Resolvers/WorkResolver');

module.exports = {
    getWorks: WorkResolver.getWorks,
}