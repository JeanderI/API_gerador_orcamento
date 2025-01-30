import { Request, Response } from "express";
import { createEstimateService } from "../services/estimate/createEstimate.services";
import { listEstimateService } from "../services/estimate/listEstimate.services";
import { findEstimateService } from "../services/estimate/findEstimate.services";
import { updateEstimateService } from "../services/estimate/updateEstimate.services";
import { deleteEstimateService } from "../services/estimate/deleteEstimate.services";
import jwt from "jsonwebtoken";

const createEstimateController = async (req: Request, res: Response) => {
	const authToken = req.headers.authorization?.split(" ")[1];
  
	if (!authToken) {
	  return res.status(401).json({ message: "Authentication token not provided" });
	}
  
	const token = authToken.replace("Bearer ", "");
	const secretKey = process.env.SECRET_KEY;
  
	if (secretKey === undefined) {
	  return res.status(500).json({ message: "Secret key is not defined" });
	}
  
	try {
	  const decoded = jwt.verify(token, secretKey);
	  const estimateId = typeof decoded.sub === "string" ? decoded.sub : "";
  
	  if (!estimateId) {
		return res.status(401).json({ message: "Token is invalid" });
	  }
  
	  const newEstimate = await createEstimateService(req.body, estimateId);
  
	  return res.status(201).json(newEstimate);
	} catch (err) {
	  console.error("Error verifying token:", err);
	  return res.status(401).json({ message: "Invalid or expired token" });
	}
  };
  
const listEstimateController = async (req: Request, res: Response) => {
	const estimates = await listEstimateService();

	return res.status(200).json(estimates);
};

const findEstimateController = async (req: Request, res: Response) => {
	const estimateId = req.params.id;
	const estimate = await findEstimateService(estimateId);

	return res.status(200).json(estimate);
};

const updateEstimateController = async (req: Request, res: Response) => {
	const estimateData = req.body;
	const idEstimate = req.params.id;
	const updatedEstimate = await updateEstimateService(estimateData, idEstimate);

	return res.status(200).json(updatedEstimate);
};

const deleteEstimateController = async (req: Request, res: Response) => {
	await deleteEstimateService(req.params.id);

	return res.status(204).send();
};

export {
	createEstimateController,
	listEstimateController,
	findEstimateController,
	updateEstimateController,
	deleteEstimateController,
};
