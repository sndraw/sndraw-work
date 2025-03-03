import AIGraphController from "@/controller/AIGraphMultiController";
import routeMap from "@/constants/RouteMap";

const routerList = [
    {
        path: routeMap.AI_GRAPH,
        method: "GET",
        handler: AIGraphController.queryGraphList,
    },
    {
        path: routeMap.AI_GRAPH_DETAIL,
        method: "GET",
        handler: AIGraphController.getGraphInfo,
    },
    {
        path: routeMap.AI_GRAPH_NODE_DETAIL,
        method: "GET",
        handler: AIGraphController.getGraphNode,
    },
    {
        path: routeMap.AI_GRAPH_NODE_DETAIL,
        method: "PUT",
        handler: AIGraphController.updateGraphNode,
    },
    {
        path: routeMap.AI_GRAPH_NODE_DETAIL,
        method: "DELETE",
        handler: AIGraphController.deleteGraphNode,
    },
    {
        path: routeMap.AI_GRAPH_LINK_DETAIL,
        method: "GET",
        handler: AIGraphController.getGraphLink,
    },
    {
        path: routeMap.AI_GRAPH_MULTI_LINK_DETAIL,
        method: "PUT",
        handler: AIGraphController.updateGraphLink,
    },
    {
        path: routeMap.AI_GRAPH_LINK_DETAIL,
        method: "DELETE",
        handler: AIGraphController.deleteGraphLink,
    },
    {
        path: routeMap.AI_GRAPH_DATA,
        method: "GET",
        handler: AIGraphController.getGraphData,
    },
    {
        path: routeMap.AI_GRAPH_DATA_TEXT,
        method: "POST",
        handler: AIGraphController.insertText,
    },
    {
        path: routeMap.AI_GRAPH_DATA_FILE,
        method: "POST",
        handler: AIGraphController.insertFile,
    },
    {
        path: routeMap.AI_GRAPH_CHAT,
        method: "POST",
        handler: AIGraphController.graphChat,
    },
    {
        path: routeMap.AI_GRAPH_DATA,
        method: "DELETE",
        handler: AIGraphController.clearGraphData,
    },
    {
        path: routeMap.AI_GRAPH_DOCUMENT,
        method: "GET",
        handler: AIGraphController.queryGraphDocumentList,
    },
    {
        path: routeMap.AI_GRAPH_DOCUMENT_DETAIL,
        method: "GET",
        handler: AIGraphController.getGraphDocument,
    },
    {
        path: routeMap.AI_GRAPH_DOCUMENT_DETAIL,
        method: "DELETE",
        handler: AIGraphController.deleteGraphDocument,
    },
];

export default routerList;
