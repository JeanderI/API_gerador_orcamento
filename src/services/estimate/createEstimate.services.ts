import { AppDataSource } from "../../data-source";
import { Estimate } from "../../entities";
import { In, Repository } from "typeorm";
import { Client } from "../../entities/client.entities";  
import { Issuer } from "../../entities/issuer.entities";  
import { Location } from "../../entities/locations.entities";  
import { Flavor } from "../../entities/flavor.entities";  
import { Event } from "../../entities/events.entities";

const createEstimateService = async (data: any, issuerId: string) => {
  const estimateRepository: Repository<Estimate> = AppDataSource.getRepository(Estimate);
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client);
  const issuerRepository: Repository<Issuer> = AppDataSource.getRepository(Issuer);
  const locationRepository: Repository<Location> = AppDataSource.getRepository(Location);
  const flavorRepository: Repository<Flavor> = AppDataSource.getRepository(Flavor);
  const eventRepository: Repository<Event> = AppDataSource.getRepository(Event);

  const client = await clientRepository.findOneBy({ id: data.clientId });
  
  const issuer = await issuerRepository.findOne({ where: { id: issuerId } });

  const location = await locationRepository.findOne({ where: { id: data.locationId } });
  const event = await eventRepository.findOne({ where: { id: data.eventId } });

  if (!client || !issuer || !location || !event) {
    throw new Error('Client, Issuer, Location or Event not found');
  }

  const newEstimate = estimateRepository.create({
    total_amount: data.total_amount,
    sales_type: data.sales_type,
    start_date: data.start_date,
    start_time: data.start_time,
    end_date: data.end_date,
    end_time: data.end_time,
    client: client,
    issuer: issuer, 
    locations: location,
    events: event,
  });

  if (data.flavors && Array.isArray(data.flavors)) {
    const flavors = await flavorRepository.findBy({
      id: In(data.flavors),
    });
    newEstimate.flavors = flavors;
  }

  const createdEstimate = await estimateRepository.save(newEstimate);
  return createdEstimate;
};

export { createEstimateService };
