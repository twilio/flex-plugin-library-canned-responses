const { prepareFlexFunction } = require(Runtime.getFunctions()['helpers/function-helper'].path);

const requiredParameters = [];

exports.handler = prepareFlexFunction(requiredParameters, async (context, event, callback, response, handleError) => {
  try {
    const openResponsesJSON = Runtime.getAssets()['/responses.json'].open;
    const responsesJSON = JSON.parse(openResponsesJSON());

    response.setStatusCode(200);
    response.setBody({ data: responsesJSON });

    return callback(null, response);
  } catch (error) {
    return handleError(error);
  }
});
