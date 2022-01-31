import { createContainer, asClass, asFunction } from 'awilix';
import express = require('express');
import { scopePerRequest } from 'awilix-express'
import { BandImplService } from './services/impl/bandImpl.service';
import { BandRepositoryImpl } from './persistence/impl/bandRepositoryImpl';
import { SqlClientImpl } from './persistence/client/impl/sqlClientImpl';
export default (app: express.Application) => {
    const container = createContainer({
        injectionMode: 'CLASSIC'
    });

    container.register({

        // services
        bandService: asClass(BandImplService).scoped(),

        // repositories
        bandRepository: asClass(BandRepositoryImpl).scoped(),

        // clients
        sqlClientBanda: asFunction(() => getSqlClientInstance('Banda')).scoped(),
        sqlClientLider: asFunction(() => getSqlClientInstance('Lider')).scoped()
    });

    app.use(scopePerRequest(container));
}

let getSqlClientInstance = (entity: string) => {
    return new SqlClientImpl(entity);
}