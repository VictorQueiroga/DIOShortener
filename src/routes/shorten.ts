import { URLController } from "controller/URLcontroller";
import { Router } from "express";


const shortenRoute = Router();
const UrlController = new URLController();

shortenRoute.post('/shorten',UrlController.shorten);
shortenRoute.get('/:hash', UrlController.redirect);

export default shortenRoute;