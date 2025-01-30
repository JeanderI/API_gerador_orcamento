import { Estimate } from "../../entities";
import { AppDataSource } from "../../data-source";

const listEstimateService = async () => {
	const estimateRepository = AppDataSource.getRepository(Estimate);

	const estimates = await estimateRepository.find({
		relations: [
		  'client',        
		  'issuer',        
		  'locations',     
		  'events',       
		  'flavors',      
		],
	  });
	

	return estimates;
};

export { listEstimateService };
