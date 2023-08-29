import { ResponseContext } from "vclight-router";

class RestError {
    $400(response: ResponseContext) {
        response.contentType = "application/json";
        response.status = 400;
        response.response = {
            code: 400,
            msg: "Bad Request Please Try Again"
        };
    }

    $401(response: ResponseContext) {
        response.contentType = "application/json";
        response.status = 401;
        response.response = {
            code: 401,
            msg: "Unauthorized. Contact Your Administrator If This Is A Mistake"
        };
    }

    $404(response: ResponseContext) {
        response.contentType = "application/json";
        response.status = 404;
        response.response = {
            code: 404,
            msg: "Not Found Try Again"
        };
    }

    $500(response: ResponseContext) {
        response.contentType = "application/json";
        response.status = 500;
        response.response = {
            code: 500,
            msg: "An error occurred. Contact The Admin Of This Project"
        };
    }
}

const restError = new RestError();
export default restError;
