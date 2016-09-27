const testsContext = require.context('.', true, /_test\.js?$/);
testsContext.keys().forEach(testsContext);

const actionsContext = require.context('../app/actions/', true, /\.js?$/);
actionsContext.keys().forEach(actionsContext);

const componentsContext = require.context('../app/components/', true, /\.js?$/);
componentsContext.keys().forEach(componentsContext);

const connectorsContext = require.context('../app/components/Connectors/', true, /\.js?$/);
connectorsContext.keys().forEach(connectorsContext);

const reducersContext = require.context('../app/reducers/', true, /\.js?$/);
reducersContext.keys().forEach(reducersContext);


// require("../app/actions/cardActions");
// require("../app/actions/dayActions");
// require("../app/components/AppWrap");
// require("../app/components/Calendar");
// require("../app/components/Card");
// require("../app/components/Header");
// require("../app/components/KanbanBoard");
// require("../app/components/List");
